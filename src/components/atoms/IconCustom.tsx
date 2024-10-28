import { SupportedColorScheme, useColorScheme } from '@mui/material'

interface IconCustomProps {
  defaultTheme?: SupportedColorScheme
  iconDark?: React.ElementType
  iconLight?: React.ElementType
  className?: string
  onClick?: () => void
}

export const IconCustom = ({
  defaultTheme,
  iconDark: IconDark,
  iconLight: IconLight,
  className = '',
  onClick = () => null,
}: IconCustomProps) => {
  const { colorScheme } = useColorScheme()
  let theme: SupportedColorScheme | undefined

  if (defaultTheme) {
    theme = defaultTheme
  } else {
    theme = colorScheme
  }
  if (IconLight && IconDark) {
    if (theme === 'dark') {
      return <IconLight className={className} onClick={onClick} />
    } else {
      return <IconDark className={className} onClick={onClick} />
    }
  } else {
    return null
  }
}
