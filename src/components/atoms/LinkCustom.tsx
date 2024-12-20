import { useColorScheme } from '@mui/material'
import { Link } from 'react-router-dom'

export const LinkCustom = ({ to = '', name = '', className = '' }) => {
  const { colorScheme } = useColorScheme()

  return (
    <Link
      to={to}
      className={`mr-1 underline ${colorScheme === 'dark' ? 'text-info' : 'text-info'} ${className}`}
    >
      {name}
    </Link>
  )
}
