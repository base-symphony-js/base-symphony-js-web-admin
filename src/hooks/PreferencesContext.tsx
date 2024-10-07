import { createContext, useContext, useEffect, useState } from 'react'
import { ITheme } from '@common'
import { api } from '@config'
import { PreferencesStorage } from '@services'
import { ILanguages, ITranslation, translations } from '@languages'
import { ThemeProvider, createTheme } from '@mui/material'

interface PreferenceContextType {
  t: ITranslation
  lng: ILanguages
  theme: ITheme
  setLngEs: () => void
  setLngEn: () => void
  setThemeLight: () => void
  setThemeDark: () => void
}

interface PreferencesContextProviderProps {
  children: React.ReactNode
}

const PreferencesContext = createContext<PreferenceContextType>(
  {} as PreferenceContextType,
)

export const PreferencesContextProvider = ({
  children,
}: PreferencesContextProviderProps) => {
  const [lng, setLng] = useState<ILanguages>('en')
  const [theme, setTheme] = useState<ITheme>('light')

  const t = translations[lng]

  useEffect(() => {
    loadPreferences()
  }, [])

  const loadPreferences = () => {
    const saveLng = PreferencesStorage.getLanguages()
    const saveTheme = PreferencesStorage.getTheme()
    setLng(saveLng)
    setTheme(saveTheme)
    PreferencesStorage.setLanguages(saveLng)
    PreferencesStorage.setTheme(saveTheme)
    api.defaults.headers['Accept-Language'] = saveLng
  }

  const setLngEs = () => {
    setLng('es')
    PreferencesStorage.setLanguages('es')
    api.defaults.headers['Accept-Language'] = 'es'
  }

  const setLngEn = () => {
    setLng('en')
    PreferencesStorage.setLanguages('en')
    api.defaults.headers['Accept-Language'] = 'en'
  }

  const setThemeLight = () => {
    setTheme('light')
    PreferencesStorage.setTheme('light')
  }

  const setThemeDark = () => {
    setTheme('dark')
    PreferencesStorage.setTheme('dark')
  }

  return (
    <PreferencesContext.Provider
      value={{ t, lng, theme, setLngEs, setLngEn, setThemeLight, setThemeDark }}
    >
      <ThemeProvider
        theme={createTheme({ colorSchemes: { dark: theme === 'dark' } })}
      >
        {children}
      </ThemeProvider>
    </PreferencesContext.Provider>
  )
}

export const usePreferences = () => {
  const context = useContext(PreferencesContext)
  if (context === undefined) {
    throw new Error('usePreferences can only be used inside Provider')
  }
  return context
}
