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
  MAIN: {
    path: '/',
    route: '/',
  },
  LOGIN: {
    path: '/login',
    route: '/login',
  },
  NOT_FOUND: {
    path: '/page-not-found',
    route: '/page-not-found',
  },
  NOT_AUTHORIZED: {
    path: '/page-not-authorized',
    route: '/page-not-authorized',
  },
  DASHBOARD: {
    path: '/dashboard',
    route: '/',
    PRIVACY_POLICY: {
      path: '/dashboard/privacy-policy',
      route: '/privacy-policy',
    },
    TERMS_AND_CONDITIONS: {
      path: '/dashboard/terms-and-conditions',
      route: '/terms-and-conditions',
    },
    ABOUT: {
      path: '/dashboard/about',
      route: '/about',
    },
    SECURITY: {
      path: '/dashboard/security',
      route: '/security',
      USERS: {
        path: '/dashboard/security/users',
        route: '/security/users',
      },
      ROLES: {
        path: '/dashboard/security/roles',
        route: '/security/roles',
      },
      PERMISSIONS: {
        path: '/dashboard/security/permissions',
        route: '/security/permissions',
      },
    },
    EXAMPLES: {
      path: '/dashboard/examples',
      route: '/examples',
      ALERTS: {
        path: '/dashboard/examples/alerts',
        route: '/examples/alerts',
      },
      BUTTONS: {
        path: '/dashboard/examples/buttons',
        route: '/examples/buttons',
      },
      INPUTS_1: {
        path: '/dashboard/examples/inputs1',
        route: '/examples/inputs1',
      },
      INPUTS_2: {
        path: '/dashboard/examples/inputs2',
        route: '/examples/inputs2',
      },
      INPUTS_3: {
        path: '/dashboard/examples/inputs3',
        route: '/examples/inputs3',
      },
      INPUTS_4: {
        path: '/dashboard/examples/inputs4',
        route: '/examples/inputs4',
      },
      LOADERS: {
        path: '/dashboard/examples/loaders',
        route: '/examples/loaders',
      },
      MODAL_WINDOWS: {
        path: '/dashboard/examples/modal-windows',
        route: '/examples/modal-windows',
      },
      TABLES: {
        path: '/dashboard/examples/tables',
        route: '/examples/tables',
      },
      TEXT_AND_COLORS: {
        path: '/dashboard/examples/text-and-colors',
        route: '/examples/text-and-colors',
      },
    },
  },
}
