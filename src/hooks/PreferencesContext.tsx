import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '@config'
import { PreferencesStorage } from '@services'
import { ILanguages, ITranslation, translations } from '@languages'
import { ThemeProvider, createTheme } from '@mui/material'
import { COLORS } from '@common'

interface PreferenceContextType {
  t: ITranslation
  lng: ILanguages
  setLngEs: () => void
  setLngEn: () => void
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

  const t = translations[lng]

  useEffect(() => {
    loadPreferences()
  }, [])

  const loadPreferences = () => {
    const saveLng = PreferencesStorage.getLanguages()
    setLng(saveLng)
    PreferencesStorage.setLanguages(saveLng)
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

  const currentTheme = createTheme({
    colorSchemes: { dark: true },
    palette: {
      primary: { main: COLORS.primary },
      secondary: { main: COLORS.secondary },
      success: { main: COLORS.success },
      error: { main: COLORS.error },
      warning: { main: COLORS.warning },
    },
  })

  return (
    <PreferencesContext.Provider value={{ t, lng, setLngEs, setLngEn }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
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