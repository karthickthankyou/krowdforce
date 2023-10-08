import { ToastButton } from '../components/ToastButton'
import { Map } from '@krowdforce/ui/src/components/organisms/Map'
import { Panel } from '@krowdforce/ui/src/components/organisms/Map/Panel'
import { initialBounds, initialViewState } from '@krowdforce/util/constants'
import { fetchGraphQLInfer } from './util/fetch'
import { SearchJobsDocument } from '@krowdforce/network/src/generated'
import { SearchJobs } from '@krowdforce/ui/src/components/templates/SearchJobs'
import { SelectMultiSkills } from '@krowdforce/ui/src/components/templates/NewJob'
import { useState } from 'react'

export default async function Home() {
  const jobs = await fetchGraphQLInfer(SearchJobsDocument, {
    locationFilter: initialBounds,
  })
  return (
    <main>
      <SearchJobs searchJobs={jobs.data?.searchJobs || []} />
    </main>
  )
}
