'use client'
import Link from 'next/link'

import { initialBounds, initialViewState } from '@krowdforce/util/constants'

import {
  SearchJobsDocument,
  SearchJobsQuery,
} from '@krowdforce/network/src/generated'
import { useKeypress } from '@krowdforce/util'
import { fetchGraphQLNoAuth } from '@krowdforce/web/src/app/util/fetchNoAuth'
import { IconPick, IconX } from '@tabler/icons-react'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Popup, ViewStateChangeEvent } from 'react-map-gl'
import { buttonVariants } from '../atoms/button'
import { Description, Title } from '../atoms/typography'
import { Map } from '../organisms/Map'
import { Marker } from '../organisms/Map/MapMarker'
import { Panel } from '../organisms/Map/Panel'
import { DefaultZoomControls } from '../organisms/Map/ZoomControls/ZoomControls'
import { SetCity } from '../organisms/SetCity'
import { SelectMultiSkills } from './NewJob'
export const SearchJobs = ({
  searchJobs,
}: {
  searchJobs: SearchJobsQuery['searchJobs']
}) => {
  const [jobResults, setJobResults] = useState<SearchJobsQuery['searchJobs']>(
    () => searchJobs,
  )
  const [skills, setSkills] = useState<string[]>([])
  const [bounds, setBounds] = useState(() => initialBounds)

  useEffect(() => {
    console.log('bounds ', bounds)
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      console.log('skills', skills)
      const jobs = await fetchGraphQLNoAuth(SearchJobsDocument, {
        locationFilter: bounds,
        jobFilter: {
          where: {
            ...(skills.length
              ? { skills: { some: { name: { in: skills } } } }
              : null),
          },
        },
      })
      setJobResults(jobs.data?.searchJobs || [])
      console.log('jobs ', jobs)
    })()
  }, [bounds, skills])

  console.log('searchJobs', searchJobs)
  const handleMapChange = useCallback(
    (target: ViewStateChangeEvent['target']) => {
      const bounds = target.getBounds()

      const locationFilter = {
        ne_lat: bounds?.getNorthEast().lat || 0,
        ne_lng: bounds?.getNorthEast().lng || 0,
        sw_lat: bounds?.getSouthWest().lat || 0,
        sw_lng: bounds?.getSouthWest().lng || 0,
      }
      //   console.log('locationFilter', locationFilter)
      setBounds(locationFilter)
    },
    [],
  )
  return (
    <div>
      <Map
        initialViewState={initialViewState}
        onLoad={(e) => handleMapChange(e.target)}
        onZoomEnd={(e) => handleMapChange(e.target)}
        onDragEnd={(e) => handleMapChange(e.target)}
      >
        <Panel position="left-top">
          <SetCity />
        </Panel>
        <Panel position="right-top" className="min-w-lg">
          <SelectMultiSkills setValue={setSkills} />
        </Panel>
        <Panel position="right-center">
          <DefaultZoomControls />
        </Panel>
        {jobResults.map((job) => (
          <MarkerWithPopup marker={job} key={job.id} />
        ))}
      </Map>
    </div>
  )
}

export const MarkerWithPopup = ({
  marker,
}: {
  marker: SearchJobsQuery['searchJobs'][number]
}) => {
  const [showPopup, setShowPopup] = useState(false)
  useKeypress(['Escape'], () => setShowPopup(false))

  return (
    <div>
      {showPopup ? (
        <Popup
          latitude={marker.address?.lat || 0}
          longitude={marker.address?.lng || 0}
          //   onOpen={() => console.log('Opened')}
          closeOnClick={false}
          anchor="bottom"
          offset={24}
          closeButton={false}
        >
          <PopupContent onClose={() => setShowPopup(false)}>
            <div className="p-1 space-y-2">
              <Title>{marker.title}</Title>
              <Description>{marker.description}</Description>
              <TitleValue title="Company">{marker.company.name}</TitleValue>
              <div className="grid grid-cols-2 gap-1">
                <TitleValue title="Status">{marker.status}</TitleValue>
                <TitleValue title="Salary">{marker.salary || '-'}</TitleValue>
              </div>
              <TitleValue title="Type">{marker.type}</TitleValue>
              <Link
                href={`/jobs/${marker.id}`}
                className={buttonVariants({
                  variant: 'outline',
                  className: 'w-full',
                })}
              >
                View job
              </Link>
            </div>
          </PopupContent>
        </Popup>
      ) : null}

      <Marker
        anchor="bottom"
        latitude={marker.address?.lat || 0}
        longitude={marker.address?.lng || 0}
        onClick={() => {
          setShowPopup((state) => !state)
        }}
      >
        <div className="cursor-pointer">
          <IconPick />
        </div>
      </Marker>
    </div>
  )
}

export const PopupContent = ({
  onClose,
  children,
}: {
  onClose: () => void
  children: ReactNode
}) => {
  return (
    <div className="w-48 relative">
      <div className="col-start-1 row-start-1 ">{children}</div>

      <button
        type="button"
        className="absolute top-0 right-0 p-0.5 rounded-bl bg-black/30 hover:bg-black/40"
        onClick={onClose}
      >
        <IconX className="w-5 h-5 text-white" />
      </button>
    </div>
  )
}

export const TitleValue = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  if (!children) return null
  return (
    <div className="text-black">
      <div className="text-xs font-bold">{title}</div>
      <div>{children}</div>
    </div>
  )
}
