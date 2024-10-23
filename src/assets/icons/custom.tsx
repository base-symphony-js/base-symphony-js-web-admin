import { SupportedColorScheme } from '@mui/material'
import { IconCustom } from '@components'
import ProfileDark from './sidebar/ProfileDark.svg?react'
import ProfileLight from './sidebar/ProfileLight.svg?react'
import Logo from './sidebar/Logo.svg?react'

interface IconProps {
  theme?: SupportedColorScheme
  className?: string
}

export const ProfileCustomIcon = ({ theme, className }: IconProps) => (
  <IconCustom
    iconDark={ProfileDark}
    iconLight={ProfileLight}
    defaultTheme={theme}
    className={className}
  />
)
export const LogoCustomIcon = ({ theme, className }: IconProps) => (
  <IconCustom
    iconDark={Logo}
    iconLight={Logo}
    defaultTheme={theme}
    className={className}
  />
)
