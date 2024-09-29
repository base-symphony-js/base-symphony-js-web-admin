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
  getTheme(): string {
    return localStorage.getItem('preferences-theme') ?? ''
  },
  setTheme(newTheme: string) {
    localStorage.setItem('preferences-theme', newTheme)
  },
  removeTheme() {
    localStorage.removeItem('preferences-theme')
  },
  getLanguages(): string {
    return localStorage.getItem('preferences-languages') ?? ''
  },
  setLanguages(newLanguages: string) {
    localStorage.setItem('preferences-languages', newLanguages)
  },
  removeLanguages() {
    localStorage.removeItem('preferences-languages')
  },
}
