import { ITheme } from '@common'
import { IconCustom } from '@components'
import HomeDark from './sidebar/HomeDark.svg?react'
import HomeLight from './sidebar/HomeLight.svg?react'
import English from './lng/English.svg?react'
import Spanish from './lng/Spanish.svg?react'
import UserProfileDark from './sidebar/UserProfileDark.svg?react'
import UserProfileLight from './sidebar/UserProfileLight.svg?react'
import VolquetaDark from './sidebar/VolquetaDark.svg?react'
import VolquetaLight from './sidebar/VolquetaLight.svg?react'

interface IconProps {
  theme?: ITheme
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
export const EnglishIcon = ({ theme, className }: IconProps) => (
  <IconCustom
    iconDark={English}
    iconLight={English}
    defaultTheme={theme}
    className={className}
  />
)
export const SpanishIcon = ({ theme, className }: IconProps) => (
  <IconCustom
    iconDark={Spanish}
    iconLight={Spanish}
    defaultTheme={theme}
    className={className}
  />
)
export const UserProfileIcon = ({ theme, className }: IconProps) => (
  <IconCustom
    iconDark={UserProfileDark}
    iconLight={UserProfileLight}
    defaultTheme={theme}
    className={className}
  />
)
export const VolquetaIcon = ({ theme, className }: IconProps) => (
  <IconCustom
    iconDark={VolquetaDark}
    iconLight={VolquetaLight}
    defaultTheme={theme}
    className={className}
  />
)
