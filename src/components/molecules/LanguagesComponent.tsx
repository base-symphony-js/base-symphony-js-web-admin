import { useState } from 'react'
import { SwitchCustom, TextCustom } from '@components'
import { usePreferences } from '@hooks'

export const LanguagesComponent = () => {
  const { t, lng, setLngEs, setLngEn } = usePreferences()
  const [isEnglish, setIsEnglish] = useState(lng === 'en')

  const handleChange = () => {
    const newValue = !isEnglish
    if (newValue) {
      setLngEn()
    } else {
      setLngEs()
    }
    setIsEnglish(newValue)
  }

  return (
    <div className="flex items-center gap-2 ">
      <TextCustom
        text={t.G_SPANISH}
        className="w-20 font-medium text-white text-end"
      />
      <SwitchCustom value={isEnglish} setValue={handleChange} color="warning" />
      <TextCustom text={t.G_ENGLISH} className="w-20 font-medium text-white" />
    </div>
  )
}
