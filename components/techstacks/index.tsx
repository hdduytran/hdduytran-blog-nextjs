import * as iconList from './icons'

const components = {}

for (const key in iconList) {
  components[key.toLowerCase()] = iconList[key]
}

type TechStackProps = {
  tech: string
}

const TechStack = ({ tech }: TechStackProps) => {
  const IconSvg = components[tech.toLowerCase().replace(/ |\//g, '')]
  return (
    <div>
      {/* tech stack include icon follower by its name */}
      <div className="flex items-center space-x-2 border-2 rounded-md px-1 mb-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200">
        {IconSvg && (
          <IconSvg className="w-5 h-5  fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 " />
        )}
        <span>{tech}</span>
      </div>
    </div>
  )
}

export default TechStack
