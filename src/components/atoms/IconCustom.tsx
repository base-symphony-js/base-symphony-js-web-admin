interface IconCustomProps {
  defaultTheme?: 'dark' | 'light'
  icon?: React.ElementType
  iconDark?: React.ElementType
  iconLight?: React.ElementType
}

export const IconCustom = ({
  defaultTheme = 'light',
  icon: Icon,
  iconDark: IconDark,
  iconLight: IconLight,
  ...res
}: IconCustomProps) => {
  let isDark = false

  if (defaultTheme) {
    isDark = defaultTheme === 'dark'
  } else {
    isDark = false // isDark = theme === 'dark'
  }
  if (Icon) {
    return <Icon className={isDark ? 'text-white' : 'text-black'} {...res} />
  } else {
    if (IconLight && IconDark) {
      if (isDark) {
        return <IconLight {...res} />
      } else {
        return <IconDark {...res} />
      }
    } else {
      return null
    }
  }
}
