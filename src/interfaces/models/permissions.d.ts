type Modules = 'security' | 'business' | 'products' | 'billing'

type Sections =
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
  section: Sections
  actions: Actions[]
}

export interface IModule {
  module: Modules
  sections: ISection[]
}
