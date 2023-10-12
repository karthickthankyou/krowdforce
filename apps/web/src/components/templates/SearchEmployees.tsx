'use client'
import Link from 'next/link'
import Image from 'next/image'

import {
  initialBounds,
  initialViewState,
  ITEMS_PER_PAGE,
} from '@krowdforce/util/constants'
import {} from '@krowdforce/network/src/generated'
import {
  SearchEmployeesDocument,
  SearchEmployeesQuery,
} from '@krowdforce/network/src/generated'
import { useKeypress } from '@krowdforce/util'
import { IconUser, IconX } from '@tabler/icons-react'
import { Loader } from 'lucide-react'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Popup, ViewStateChangeEvent } from 'react-map-gl'
import { fetchGraphQLNoAuth } from '../../app/util/fetchNoAuth'
import { buttonVariants } from '../atoms/button'
import { Pagination } from '../atoms/pagination'
import { Description, Title } from '../atoms/typography'
import { Map } from '../organisms/Map'
import { Marker } from '../organisms/Map/MapMarker'
import { Panel } from '../organisms/Map/Panel'
import { DefaultZoomControls } from '../organisms/Map/ZoomControls/ZoomControls'
import { SetCity } from '../organisms/SetCity'

import { SelectMultiSkills } from './NewJob'
import { Badge } from '../atoms/badge'
import { FollowButton } from '../organisms/FollowButton'

export const SearchEmployees = ({
  employees,
}: {
  employees: SearchEmployeesQuery
}) => {
  const [employeeResults, setemployeeResults] = useState<SearchEmployeesQuery>(
    () => employees,
  )
  const [skills, setSkills] = useState<string[]>([])
  const [bounds, setBounds] = useState(() => initialBounds)
  const [skip, setSkip] = useState(0)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const take = ITEMS_PER_PAGE
        const response = await fetchGraphQLNoAuth(SearchEmployeesDocument, {
          locationFilter: bounds || initialBounds,
          employeeFilter: {
            skip,
            take,
            where: {
              ...(skills.length
                ? { skills: { some: { name: { in: skills } } } }
                : null),
            },
          },
        })

        setemployeeResults(
          response.data || {
            employeeAggregate: { count: 0 },
            searchEmployees: [],
          },
        )
      } catch (error) {
        console.error('Error fetching Employees:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [skip, bounds, skills])

  useEffect(() => {
    setSkip(0)
  }, [skills, bounds])

  const handleMapChange = useCallback(
    (target: ViewStateChangeEvent['target']) => {
      const bounds = target.getBounds()

      const locationFilter = {
        ne_lat: bounds?.getNorthEast().lat || 0,
        ne_lng: bounds?.getNorthEast().lng || 0,
        sw_lat: bounds?.getSouthWest().lat || 0,
        sw_lng: bounds?.getSouthWest().lng || 0,
      }
      console.log('locationFilter', locationFilter)
      setBounds(locationFilter)
    },
    [setBounds],
  )
  return (
    <div>
      <Map
        initialViewState={initialViewState}
        onLoad={(e) => handleMapChange(e.target)}
        onZoomEnd={(e) => handleMapChange(e.target)}
        onDragEnd={(e) => handleMapChange(e.target)}
      >
        <Panel position="center-bottom">
          {loading ? <Loader className="animate-spin" /> : null}
          {employeeResults.employeeAggregate.count === 0 ? (
            <div>No Results</div>
          ) : null}
          {employeeResults.employeeAggregate.count > ITEMS_PER_PAGE ? (
            <Pagination
              skip={skip}
              totalResults={employeeResults?.employeeAggregate.count}
              onPageChange={(page) => {
                setSkip((page - 1) * ITEMS_PER_PAGE)
              }}
            />
          ) : null}
        </Panel>
        <Panel position="left-top">
          <SetCity />
        </Panel>
        <Panel position="right-top" className="min-w-lg">
          <SelectMultiSkills setValue={setSkills} />
        </Panel>
        <Panel position="right-center">
          <DefaultZoomControls />
        </Panel>
        {employeeResults?.searchEmployees.map((employee) => (
          <MarkerWithPopup marker={employee} key={employee.user.uid} />
        ))}
      </Map>
    </div>
  )
}

export const MarkerWithPopup = ({
  marker,
}: {
  marker: SearchEmployeesQuery['searchEmployees'][number]
}) => {
  const [showPopup, setShowPopup] = useState(false)
  useKeypress(['Escape'], () => setShowPopup(false))

  return (
    <div>
      {showPopup ? (
        <Popup
          latitude={marker.address?.lat || 0}
          longitude={marker.address?.lng || 0}
          closeOnClick={false}
          anchor="bottom"
          offset={36}
          closeButton={false}
        >
          <PopupContent onClose={() => setShowPopup(false)}>
            <div className="p-1 space-y-2">
              <Title>{marker.user.name}</Title>
              <Description>{marker.about}</Description>
              <FollowButton followingId={marker.user.uid} />
              <div className="flex gap-2 flex-wrap">
                {marker.skills.map((skill) => (
                  <Badge variant={'outline'} key={skill.name}>
                    {skill.name}
                  </Badge>
                ))}
              </div>

              <div className="flex">
                <Link
                  href={`/employees/${marker.user.uid}`}
                  className={buttonVariants({
                    variant: 'outline',
                    className: 'w-full',
                  })}
                >
                  View employee
                </Link>
              </div>
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
          <Image
            src={marker.user.image || ''}
            className="w-8 h-8 shadow-lg rounded-full"
            alt=""
            width={200}
            height={200}
          />
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
