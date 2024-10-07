import { SupportedColorScheme } from '@mui/material'
import { IconCustom } from '@components'
import HomeDark from './sidebar/HomeDark.svg?react'
import HomeLight from './sidebar/HomeLight.svg?react'
import ProfileDark from './sidebar/ProfileDark.svg?react'
import ProfileLight from './sidebar/ProfileLight.svg?react'

interface IconProps {
  theme?: SupportedColorScheme
  className?: string
}

export const HomeCustomIcon = ({ theme, className }: IconProps) => (
  <IconCustom
    iconDark={HomeDark}
    iconLight={HomeLight}
    defaultTheme={theme}
    className={className}
  />
)
export const ProfileCustomIcon = ({ theme, className }: IconProps) => (
  <IconCustom
    iconDark={ProfileDark}
    iconLight={ProfileLight}
    defaultTheme={theme}
    className={className}
  />
)
