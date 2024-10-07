import { ITheme } from '@common'
import { useColorScheme } from '@mui/material'

interface IconCustomProps {
  defaultTheme?: ITheme
  icon?: React.ElementType
  iconDark?: React.ElementType
  iconLight?: React.ElementType
  className?: string
}

export const IconCustom = ({
  defaultTheme,
  icon: Icon,
  iconDark: IconDark,
  iconLight: IconLight,
  className = '',
}: IconCustomProps) => {
  const { colorScheme: theme } = useColorScheme()
  let isDark = false

  if (defaultTheme) {
    isDark = defaultTheme === 'dark'
  } else {
    isDark = theme === 'dark'
  }
  if (Icon) {
    return (
      <Icon
        className={`${className} ${defaultTheme === 'dark' ? 'text-white' : defaultTheme === 'light' ? 'text-black' : ''}`}
      />
    )
  } else {
    if (IconLight && IconDark) {
      if (isDark) {
        return <IconLight className={className} />
      } else {
        return <IconDark className={className} />
      }
    } else {
      return null
    }
  }
}
