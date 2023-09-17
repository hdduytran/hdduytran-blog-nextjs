import * as iconList from './icons'

const components = {}

for (const key in iconList) {
  components[key.toLowerCase()] = iconList[key]
}

type IconProps = {
  kind: keyof typeof components | string
  href?: string | undefined
  size?: number
}

const Icon = ({ kind, href, size = 8 }: IconProps) => {
  if (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)) return null

  const IconSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600 hover:scale-125"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <IconSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default Icon
