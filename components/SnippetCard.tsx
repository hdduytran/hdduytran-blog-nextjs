import { TechStackIcon } from './techstacks'
import Link from './Link'

export function SnippetCard({ snippet }) {
  const { stack, heading, summary, title, slug } = snippet

  return (
    <Link href={`/snippets/${slug}`} title={title}>
      <div
        data-umami-event="view-snippet"
        className="mb-4 p-3 lg:p-4 gap-6 flex
        rounded-md border border-gray-400  border-opacity-60 dark:border-gray-600 dark:hover:border-gray-400
         hover:scale-105  shadow-md shadow-neutral-300"
        // className="flex overflow-hidden rounded-md border
        // border-gray-400 border-opacity-60 hover:border-gray-500 hover:scale-105
        // dark:border-gray-600 dark:hover:border-gray-400 shadow-lg shadow-neutral-600"
      >
        <div className="flex items-center justify-center">
          <TechStackIcon tech={stack} />
        </div>
        <div className="overflow-hidden space-y-2">
          <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold leading-8 tracking-tight lg:text-xl">
            {heading}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 lg:text-base">{summary}</p>
        </div>
      </div>
    </Link>
  )
}
