import ReactMarkdown from 'react-markdown'
import { PageLayout } from '@components'
import { TERMS_AND_CONDITIONS, APPENDIX } from '@assets'
import { Divider } from '@mui/material'

export const TermsAndConditionsPage = () => {
  return (
    <PageLayout>
      <ReactMarkdown>{TERMS_AND_CONDITIONS}</ReactMarkdown>
      <Divider className="mb-8" />
      <ReactMarkdown>{APPENDIX}</ReactMarkdown>
    </PageLayout>
  )
}
