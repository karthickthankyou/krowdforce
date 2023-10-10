import { JobDocument } from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../util/fetch'
import { JobPage } from '../../../components/templates/JobPage'

export default async function JobPagePage({
  params,
}: {
  params: { slug: string }
}) {
  const jobId = +params.slug

  const data = await fetchGraphQLInfer(JobDocument, {
    where: { id: jobId },
  })

  const job = data.data?.job
  if (!job?.id) {
    return <div>Job not found.</div>
  }

  return <JobPage job={job} />
}
