import ReactMarkdown from 'react-markdown'
import { PageLayout } from '@components'
import { ABOUT } from '@assets'

export const AboutPage = () => {
  return (
    <PageLayout>
      <ReactMarkdown>{ABOUT}</ReactMarkdown>
    </PageLayout>
  )
}
