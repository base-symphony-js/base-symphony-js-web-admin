import { IModule, IModules, IRole, ISections } from '@interfaces'

export const canAccess = (
  roles: IRole[],
  module: IModules,
  section: ISections,
) => {
  const isOwnerRole = roles.some(item => item.type === 'owner')
  if (isOwnerRole) return true

  const action = 'read'
  for (const role of roles) {
    // Is role is active
    if (role.state) {
      // Get modules
      const modules: IModule[] = role.permissions.filter(
        p => p.module === module,
      )
      for (const m of modules) {
        // Get sections
        const sections = m.sections?.filter(s => s.section === section)
        for (const s of sections) {
          // Verify action
          if (s.actions.includes(action)) {
            return true
          }
        }
      }
    }
  }
  return false
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '/page-not-found',
  NOT_AUTHORIZED: '/page-not-authorized',
  DASHBOARD: {
    SECURITY: {
      USERS: '/dashboard/security/users',
      ROLES: '/dashboard/security/roles',
      PERMISSIONS: '/dashboard/security/permissions',
    },
    EXAMPLES: {
      ALERTS: '/dashboard/examples/alerts',
      BUTTONS: '/dashboard/examples/buttons',
      INPUTS_1: '/dashboard/examples/inputs1',
      INPUTS_2: '/dashboard/examples/inputs2',
      INPUTS_3: '/dashboard/examples/inputs3',
      INPUTS_4: '/dashboard/examples/inputs4',
      LOADERS: '/dashboard/examples/loaders',
      MODAL_WINDOWS: '/dashboard/examples/modal-windows',
      TABLES: '/dashboard/examples/tables',
      TEXT_AND_COLORS: '/dashboard/examples/text-and-colors',
    },
  },
}
