import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

import Icon from '@/components/icons'

import homeConfig from '@/data/homeConfig'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Welcome to <u>hdduytran</u> Page
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-w-none">
          {homeConfig.map((item) => (
            <li className="py-5 px-10">
              <Link
                href={item.path}
                className="flex  items-center   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
              >
                <div className="object-contain max-w-none md:h-auto w-36 p-2 ">
                  <Icon kind={item.icon} size={200} />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal max-w-3xl bg-gray-500 bg-transparent bg-opacity-30 md:bg-opacity-100">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2">
                    {item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-2 ">
                    {item.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
