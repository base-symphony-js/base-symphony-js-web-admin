import { Breadcrumbs } from '@mui/material'
import { LinkCustom, TextCustom } from '@components'

export const BreadcrumbsCustom = ({ route = '' }) => {
  const parts = route.substring(1).split('/')

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {parts.map((part, index) => {
        const path = '/' + parts.slice(0, index + 1).join('/')
        if (index !== parts.length - 1) {
          return <LinkCustom key={path} to={path} name={part} />
        } else {
          return <TextCustom key={path} text={part} color="textSecondary" />
        }
      })}
    </Breadcrumbs>
  )
}
