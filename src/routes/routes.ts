import { ILanguages } from '@languages'
import en from './languages/en'
import es from './languages/es'

const translationRoutes = { en, es }

type IRoutes = typeof translationRoutes.en

export const ROUTES = translationRoutes.en

export const getRoutesLng = (lng: ILanguages): IRoutes => {
  return translationRoutes[lng]
}
