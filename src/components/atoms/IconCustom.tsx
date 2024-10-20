import { SupportedColorScheme, useColorScheme } from '@mui/material'

interface IconCustomProps {
  defaultTheme?: SupportedColorScheme
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
  const { colorScheme } = useColorScheme()
  let theme: SupportedColorScheme | undefined

  if (defaultTheme) {
    theme = defaultTheme
  } else {
    theme = colorScheme
  }
  if (Icon) {
    return (
      <Icon
        className={`${className} ${defaultTheme === 'dark' ? 'text-white' : defaultTheme === 'light' ? 'text-black' : ''}`}
      />
    )
  } else {
    if (IconLight && IconDark) {
      if (theme === 'dark') {
        return <IconLight className={className} />
      } else {
        return <IconDark className={className} />
      }
    } else {
      return null
    }
  }
}
