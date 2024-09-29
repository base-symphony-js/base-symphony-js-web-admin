import { IModule } from './permissions'

export type Roles = 'admin' | 'owner'

export interface IRole {
  _id: string
  type: Roles
  name: string
  description: string
  permissions: IModule[]
  created_at: Date
  created_by?: string
  updated_at?: Date
  updated_by?: string
  state: boolean
}
