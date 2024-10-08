import tailwindConfig from '@tailwind.config.ts'
export const DRAWER_WIDTH = 290
export const DEFAULT_LANGUAGES = 'en'

export const COLORS = { ...tailwindConfig.theme.extend.colors }

export type ICOLORS = keyof typeof COLORS

export type ITheme = 'dark' | 'light' | 'system'
