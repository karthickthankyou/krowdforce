import {
  MyBookmarksDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { BookmarkCard } from '../organisms/BookmarkCard'

export const EmpoyeeBookmarks = async () => {
  const myBookmarks = await fetchGraphQL({
    document: MyBookmarksDocument,
    config: { next: { tags: [namedOperations.Query.myBookmarks] } },
  })

  return (
    <main>
      <div>
        {myBookmarks.data?.myBookmarks.length === 0 ? (
          <div>No saved jobs.</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-12 mt-6">
        {myBookmarks.data?.myBookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark.job.id} bookmark={bookmark} />
        ))}
      </div>
    </main>
  )
}
