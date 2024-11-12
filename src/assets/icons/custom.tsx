import { SupportedColorScheme } from '@mui/material'
import { IconCustom } from '@components'
import ProfileDark from './sidebar/ProfileDark.svg?react'
import ProfileLight from './sidebar/ProfileLight.svg?react'
import LogoDark from './sidebar/LogoDark.svg?react'
import LogoLight from './sidebar/LogoLight.svg?react'

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
    iconDark={LogoDark}
    iconLight={LogoLight}
    defaultTheme={theme}
    className={className}
    onClick={onClick}
  />
)
