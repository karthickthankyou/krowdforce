import { fetchGraphQLInfer } from '../../util/fetch'
import { JobDocument } from '@krowdforce/network/src/generated'
import Link from 'next/link'

export default async function JobPage({
  params,
}: {
  params: { slug: string }
}) {
  const jobId = +params.slug
  const job = await fetchGraphQLInfer(JobDocument, { where: { id: jobId } })

  return (
    <div>
      <div>{job.data?.job.title}</div>
      <div>{job.data?.job.description}</div>
      <div>#{job.data?.job.id}</div>
      <div>{job.data?.job.status}</div>
      <div>Contact: {job.data?.job.contactInfo}</div>
      <Link href="/">All jobs</Link>
    </div>
  )
}
