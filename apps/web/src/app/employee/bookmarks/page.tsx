import {
  MyBookmarksDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { initialBounds, ITEMS_PER_PAGE } from '@krowdforce/util/constants'
import { fetchGraphQLInfer } from '../../util/fetch'
import { BookmarkButton } from '../../../components/organisms/BookmarkButton'
import { BookmarkCard } from '../../../components/organisms/BookmarkCard'
import { Title } from '../../../components/atoms/typography'

export default async function Home() {
  const myBookmarks = await fetchGraphQLInfer(
    MyBookmarksDocument,
    {},
    { next: { tags: [namedOperations.Query.myBookmarks] } },
  )

  return (
    <main>
      <Title className={'mt-4'}>Bookmarked jobs</Title>
      <div className="flex flex-col gap-12 mt-6">
        {myBookmarks.data?.myBookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark.job.id} bookmark={bookmark} />
        ))}
      </div>
    </main>
  )
}
