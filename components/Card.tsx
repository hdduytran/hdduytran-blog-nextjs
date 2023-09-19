import Image from './Image'
import Link from './Link'
import Icon from '@/components/icons'
import TechStack from '@/components/techstacks'

const Card = (dataCard) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className="flex h-full flex-col overflow-hidden rounded-md border
    border-gray-400 border-opacity-60 hover:border-gray-500 hover:scale-105
    dark:border-gray-600 dark:hover:border-gray-400 shadow-lg shadow-neutral-600"
    >
      <Image
        alt={dataCard.title}
        src={dataCard.imgSrc}
        className="object-cover object-center mx-6 mt-4 h-48"
        width={1088}
        height={612}
      />
      <div className="flex mt-4 grow flex-col justify-between space-y-6 p-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            {dataCard.href ? (
              <Link href={dataCard.href} aria-label={`Link to ${dataCard.title}`}>
                <span data-umami-event="project-title-link">{dataCard.title}</span>
              </Link>
            ) : (
              dataCard.title
            )}
          </h2>
          <div className="">
            <p>{dataCard.description}</p>
            {dataCard.tools && (
              <div className="flex pt-4 flex-wrap space-x-1.5">
                {dataCard.tools?.map((tool) => {
                  return <TechStack tech={tool} />
                })}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <Link
            href={dataCard.href}
            className="text-base font-medium leading-6 text-primary-500
          hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${dataCard.title}`}
          >
            <span data-umami-event="project-learn-more" className="hover:underline">
              Learn more &rarr;
            </span>
          </Link>
          <div className="flex space-x-1">
            {dataCard.github && <Icon kind="github" href={dataCard.github} size={6} />}
            {dataCard.huggingface && (
              <Icon kind="huggingface" href={dataCard.huggingface} size={6} />
            )}
            {/* <Icon kind="huggingface" href={`mailto:`} size={6} /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
