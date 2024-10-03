import { IconCustom } from '@components'
import HomeDark from './sidebar/HomeDark.svg?react'
import HomeLight from './sidebar/HomeLight.svg?react'
import English from './lng/English.svg?react'
import Spanish from './lng/Spanish.svg?react'
import UserProfileDark from './sidebar/UserProfileDark.svg?react'
import UserProfileLight from './sidebar/UserProfileLight.svg?react'
import VolquetaDark from './sidebar/VolquetaDark.svg?react'
import VolquetaLight from './sidebar/VolquetaLight.svg?react'

export const HomeCustomIcon = ({ ...res }) => (
  <IconCustom iconDark={HomeDark} iconLight={HomeLight} {...res} />
)
export const EnglishIcon = ({ ...res }) => (
  <IconCustom iconDark={English} iconLight={English} {...res} />
)
export const SpanishIcon = ({ ...res }) => (
  <IconCustom iconDark={Spanish} iconLight={Spanish} {...res} />
)
export const UserProfileIcon = ({ ...res }) => (
  <IconCustom
    iconDark={UserProfileDark}
    iconLight={UserProfileLight}
    {...res}
  />
)
export const VolquetaIcon = ({ ...res }) => (
  <IconCustom iconDark={VolquetaDark} iconLight={VolquetaLight} {...res} />
)
