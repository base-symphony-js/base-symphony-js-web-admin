import ReactMarkdown from 'react-markdown'
import { PageLayout } from '@components'
import { PRIVACY_POLICY } from '@assets'

export const PrivacyPolicyPage = () => {
  return (
    <PageLayout>
      <ReactMarkdown>{PRIVACY_POLICY}</ReactMarkdown>
    </PageLayout>
  )
}
