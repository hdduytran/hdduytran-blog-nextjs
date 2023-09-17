import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Icon from '@/components/icons'
import Image from '@/components/Image'

import WorkingHistoryLayout from './WorkingHistoryLayout'

import TechStack from '@/components/techstacks'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, location, company, email, skype, linkedin, github, techStack, education } =
    content
  console.log(techStack)
  return (
    <>
      <div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400 flex content-center">
              <span className="border-1 pt-[1%]">
                <Icon kind="location" size={5} />
              </span>
              <span className="border-1">{location}</span>
            </div>
            {/* <div className="text-gray-500 dark:text-gray-400 text-center">{occupation}</div> */}
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <Icon kind="mail" href={`mailto:${email}`} />
              <Icon kind="github" href={github} />
              <Icon kind="linkedin" href={linkedin} />
              <Icon kind="skype" href={`skype:${skype}?`} />
            </div>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-4"
            >
              <svg
                className="w-3.5 h-3.5 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{' '}
              <span>My Resume</span>
            </a>
          </div>

          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <div>{children}</div>
            <div className="education items-center gap-1 pb-0">
              <div className="font-bold">Education:</div>
              <div className="content-center">
                <ol className="items items-center gap-1 p-1 pt-0 pb-0 list-none">
                  {education &&
                    education.map((edu, index) => (
                      <li key={`${edu}-${index}`} className="">
                        <Image
                          src="/static/images/uit.png"
                          alt="uit logo"
                          width={42}
                          height={42}
                          className="float-left m-4"
                        />
                        <div className="text-lg">{edu.school}</div>
                        <div className="float-left text-gray-500">{edu.degree}</div>
                        <div className="float-right text-xs pt-1">{edu.time}</div>
                        <div className="clear-both"></div>
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="techStack items-center gap-1 clear-both">
              {/* <div className='font-bold'>Tech Stack:</div>
              <div className="flex flex-wrap items-center gap-1 pt-1">
                {techStack &&
                  techStack.map((tool) => (
                    <TechStack tech={tool}/>
                  ))}
              </div> */}
              {techStack.map((techstack, index) => (
                <div className="flex flex-wrap items-center gap-1 pt-1">
                  <div className="font-bold">{techstack.scope}: </div>
                  {techstack.stack.map((tool) => (
                    <TechStack tech={tool} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="space-y-2 pb-8 pt-6 md:space-y-5"></div> */}
        <div className="flex items-center">
          {/* <div className="flex-grow bg bg-gray-300 h-0.5"></div> */}
          <h1 className="flex-grow-0 mx-5 text dark:text-white text-4xl">Working History</h1>
          <div className="flex-grow bg bg-gray-300 h-0.5"></div>
        </div>
        <div className="pl-10">
          <WorkingHistoryLayout />
        </div>
      </div>
    </>
  )
}
