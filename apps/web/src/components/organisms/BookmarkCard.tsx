'use client'
import { MyBookmarksQuery } from '@krowdforce/network/src/generated'
import { BookmarkButton } from './BookmarkButton'
import { Description, Title2 } from '../atoms/typography'

export const BookmarkCard: React.FC<{
  bookmark: MyBookmarksQuery['myBookmarks'][0]
}> = ({ bookmark }) => {
  const { job } = bookmark
  return (
    <div className="bg-white">
      <div className="flex items-center gap-6">
        <Title2>{job.title}</Title2>
        <BookmarkButton jobId={bookmark.job.id} />
      </div>
      <Description>{job.description}</Description>
      <ul className="mt-2">
        <li>Type: {job.type}</li>
        <li>Status: {job.status}</li>
        <li>Salary: {job.salary}</li>
        <li>Address: {job?.address?.address}</li>
      </ul>
      <div className="mt-2">
        <span className="font-bold">Skills:</span>{' '}
        {job.skills.map((skill) => skill.name).join(', ')}
      </div>
    </div>
  )
}
