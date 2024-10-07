import { DEFAULT_LANGUAGES, DEFAULT_THEME, ITheme } from '@common'
import { ILanguages, translations } from '@languages'

export const PreferencesStorage = {
  getPathName(): string {
    return localStorage.getItem('preferences-path') ?? ''
  },
  setPathName(newPath: string) {
    localStorage.setItem('preferences-path', newPath)
  },
  removePathName() {
    localStorage.removeItem('preferences-path')
  },
  getTheme(): ITheme {
    const userTheme = localStorage.getItem('preferences-theme') as ITheme
    if (userTheme === 'dark' || userTheme === 'light') {
      return userTheme
    } else {
      return DEFAULT_THEME
    }
  },
  setTheme(newTheme: ITheme) {
    localStorage.setItem('preferences-theme', newTheme)
  },
  removeTheme() {
    localStorage.removeItem('preferences-theme')
  },
  getLanguages(): ILanguages {
    const userLng = localStorage.getItem('preferences-languages') as ILanguages
    if (Object.keys(translations).includes(userLng)) {
      return userLng
    } else {
      return DEFAULT_LANGUAGES
    }
  },
  setLanguages(newLanguages: ILanguages) {
    localStorage.setItem('preferences-languages', newLanguages)
  },
  removeLanguages() {
    localStorage.removeItem('preferences-languages')
  },
}
