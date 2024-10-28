import { Breadcrumbs, useColorScheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { TextCustom } from '.'

export const BreadcrumbsCustom = ({ route = '' }) => {
  const { colorScheme } = useColorScheme()
  const parts = route.substring(1).split('/')

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {parts.map((part, index) => {
        const path = '/' + parts.slice(0, index + 1).join('/')
        if (index !== parts.length - 1) {
          return (
            <Link
              key={path}
              to={path}
              className={`mr-1 underline ${colorScheme === 'dark' ? 'text-info' : 'text-primary'}`}
            >
              {part}
            </Link>
          )
        } else {
          return <TextCustom key={path} text={part} color="textSecondary" />
        }
      })}
    </Breadcrumbs>
  )
}
