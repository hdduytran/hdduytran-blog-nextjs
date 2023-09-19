// import React from 'react'
import { Career, allCareers } from 'contentlayer/generated'
// import { Timeline, EventTimeline } from "react-tailwind-timeline-component";
// import { FaTasks, FaHourglass, FaCheck, FaTimes } from "react-icons/fa";
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import ReactHtmlParser from 'react-html-parser'

import Image from '@/components/Image'
import Link from '@/components/Link'
import { convertTimeToMonthYear } from 'utils/common'

import TechStack from '@/components/techstacks'

export default function WorkingHistoryLayout() {
  const careers = allCareers.sort((a, b) => (a.timeTo && b.timeTo && a.timeTo < b.timeTo ? 1 : -1))

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {careers.map((career) => (
        <li className=" pl-6" key={career.company}>
          <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-gray-100 dark:ring-gray-900 dark:bg-blue-900">
            <Link href={career.companyUrl ? career.companyUrl : ''} target="_blank">
              <Image
                src={career.logo || '/static/images/link.png'}
                alt="flowbite"
                width={48}
                height={48}
                className="h-8 w-8 rounded-full hover:h-10 hover:w-10 object-contain"
              />
            </Link>
          </span>
          <h3 className="flex items-center m-4 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {career.occupation} at {career.company}
            <div className={`current-career ${career.isCurrent ? '' : 'hidden'}`}>Current</div>
          </h3>

          <time className="block ml-4 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            From {convertTimeToMonthYear(career.timeFrom)} to{' '}
            {career.timeTo && new Date(career.timeTo) < new Date()
              ? convertTimeToMonthYear(career.timeTo)
              : 'Present'}
          </time>
          <div className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400 italic ">
            {career.companyDescription && ReactHtmlParser(career.companyDescription.html)}
          </div>
          <div className="prose max-w-none dark:prose-invert leading-none">
            <MDXLayoutRenderer code={career.body.code} />
          </div>
          <div>
            {career.techStack && (
              <div className="flex flex-wrap items-center space-x-1 mt-1">
                {career.techStack.map((tech) => (
                  <TechStack tech={tech} key={tech} />
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
