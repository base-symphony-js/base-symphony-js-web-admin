import { useContext } from 'react'
import { PreferencesContext } from './PreferencesContext'

export const usePreferences = () => {
  const context = useContext(PreferencesContext)
  if (context === undefined) {
    throw new Error('usePreferences can only be used inside Provider')
  }
  return context
}
