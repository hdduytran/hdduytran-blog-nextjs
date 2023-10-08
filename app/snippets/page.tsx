import { genPageMetadata } from 'app/seo'
import { allSnippets } from 'contentlayer/generated'
import SnippetLayout from '@/layouts/SnippetLayout'

export const metadata = genPageMetadata({ title: 'Snippets' })

export default function Snippets() {
  return <SnippetLayout snippets={allSnippets} description="Some snippets that I find useful" />
}
