type IModules = 'security' | 'business' | 'products' | 'billing'

type ISections =
  // security
  | 'users'
  | 'roles'
  | 'permissions'
  // business
  | 'places'
  | 'providers'
  // products
  | 'foods'
  | 'complements'
  | 'extras'
  | 'drinks'
  | 'food_categories'
  // billing
  | 'taxes'
  | 'discounts'
  | 'promotions'
  | 'payment_methods'
  | 'orders'

export type Actions = 'read' | 'add' | 'edit' | 'delete'

interface ISection {
  section: ISections
  actions: Actions[]
}

export interface IModule {
  module: IModules
  sections: ISection[]
}
