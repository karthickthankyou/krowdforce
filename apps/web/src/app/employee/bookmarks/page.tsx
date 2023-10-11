import {
  MyBookmarksDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../util/fetch'
import { BookmarkCard } from '../../../components/organisms/BookmarkCard'
import { Title } from '../../../components/atoms/typography'
import Link from 'next/link'
import { IconSearch } from '@tabler/icons-react'

export default async function Home() {
  const myBookmarks = await fetchGraphQLInfer(
    MyBookmarksDocument,
    {},
    { next: { tags: [namedOperations.Query.myBookmarks] } },
  )

  return (
    <main>
      <Title className={'mt-4'}>Bookmarked jobs</Title>
      <Link href="/employee" className="flex items-center gap-2 my-2">
        <IconSearch />
        Search more jobs
      </Link>
      <div className="flex flex-col gap-12 mt-6">
        {myBookmarks.data?.myBookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark.job.id} bookmark={bookmark} />
        ))}
      </div>
    </main>
  )
}
