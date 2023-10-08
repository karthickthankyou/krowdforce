'use client'
import { Map } from '@krowdforce/ui/src/components/organisms/Map'
import { Panel } from '@krowdforce/ui/src/components/organisms/Map/Panel'
import { initialViewState } from '@krowdforce/util/constants'
import { SetCity } from '../organisms/SetCity'
import { SearchJobsQuery } from '@krowdforce/network/src/generated'
import { Marker } from '../organisms/Map/MapMarker'
import { IconBuilding, IconPick } from '@tabler/icons-react'
import { DefaultZoomControls } from '../organisms/Map/ZoomControls/ZoomControls'

export const SearchJobs = ({
  searchJobs,
}: {
  searchJobs: SearchJobsQuery['searchJobs']
}) => {
  console.log('searchJobs', searchJobs)
  return (
    <div>
      <Map initialViewState={initialViewState}>
        <Panel position='left-top'>
          <SetCity />
        </Panel>
        <Panel position='right-center'>
          <DefaultZoomControls />
        </Panel>
        {searchJobs.map((job) => (
          <Marker
            key={job.id}
            latitude={job.address?.lat || 0}
            longitude={job.address?.lng || 0}
          >
            <IconPick />
          </Marker>
        ))}
      </Map>
    </div>
  )
}
