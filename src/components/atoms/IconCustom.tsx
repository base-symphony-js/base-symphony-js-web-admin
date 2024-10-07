import { ITheme } from '@common'
import { usePreferences } from '@hooks'

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
  const { theme } = usePreferences()
  let isDark = false

  if (defaultTheme) {
    isDark = defaultTheme === 'dark'
  } else {
    isDark = theme === 'dark'
  }
  if (Icon) {
    return (
      <Icon
        className={`${className} ${defaultTheme === 'dark' ? 'text-white' : ''}`}
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
