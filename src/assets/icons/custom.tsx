import { SupportedColorScheme } from '@mui/material'
import { IconCustom } from '@components'
import ProfileDark from './sidebar/ProfileDark.svg?react'
import ProfileLight from './sidebar/ProfileLight.svg?react'
import Logo from './sidebar/Logo.svg?react'

interface IconProps {
  theme?: SupportedColorScheme
  className?: string
  onClick?: () => void
}

export const ProfileCustomIcon = ({ theme, className, onClick }: IconProps) => (
  <IconCustom
    iconDark={ProfileDark}
    iconLight={ProfileLight}
    defaultTheme={theme}
    className={className}
    onClick={onClick}
  />
)
export const LogoCustomIcon = ({ theme, className, onClick }: IconProps) => (
  <IconCustom
    iconDark={Logo}
    iconLight={Logo}
    defaultTheme={theme}
    className={className}
    onClick={onClick}
  />
)
