import dayjs from 'dayjs'
import { ILanguages } from '@languages'

export const getLegalDate = () => {
  const today = new Date()
  const legalDate = new Date(
    today.getUTCFullYear() - 18,
    today.getUTCMonth(),
    today.getUTCDate(),
  )
  return legalDate
}

export const formatDate = (
  date: Date | string | null,
  lng: ILanguages = 'en',
  type: 'date' | 'time' | 'date-time' = 'date',
) => {
  let result = ''
  if (date) {
    const newDate = new Date(date)
    let dateFormat = ''
    if (lng === 'es') {
      dateFormat = 'DD-MM-YYYY'
    } else {
      dateFormat = 'YYYY-MM-DD'
    }
    const timeFormat = 'HH:mm:ss'
    let dateTimeFormat = ''
    if (type === 'date') {
      dateTimeFormat = dateFormat
    } else if (type === 'time') {
      dateTimeFormat = timeFormat
    } else {
      dateTimeFormat = `${dateFormat} ${timeFormat}`
    }
    result = dayjs(newDate).format(dateTimeFormat)
  }
  return result
}
