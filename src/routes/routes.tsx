import { IModule, IModules, IRole, ISections } from '@interfaces'
import {
  ContentPasteIcon,
  ExtensionIcon,
  HomeIcon,
  InfoIcon,
  PolicyIcon,
  ScienceIcon,
  SecurityIcon,
  VerifiedUserIcon,
} from '@assets'
import { SvgIconProps } from '@mui/material'

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

interface IPageRoute {
  name: string
  id: string
  route: string
  path: string
  icon: React.ReactElement<SvgIconProps> | null
  pageName: string
}

interface ISectionRoute {
  name: string
  id: string
  route: string
  path: string
  icon: React.ReactElement<SvgIconProps> | null
  pageName: string
  pages: IPageRoute[]
}

interface IModuleRoute {
  name: string
  id: string
  route: string
  path: string
  icon: React.ReactElement<SvgIconProps> | null
  pageName: string
  sections: ISectionRoute[]
}

interface IROUTES {
  MAIN: string
  LOGIN: string
  NOT_FOUND: string
  NOT_AUTHORIZED: string
  DASHBOARD: {
    name: string
    id: string
    route: string
    path: string
    icon: React.ReactElement<SvgIconProps> | null
    pageName: string
    publicSections: ISectionRoute[]
    modules: IModuleRoute[]
  }
}

export const ROUTES: IROUTES = {
  MAIN: '/',
  LOGIN: '/login',
  NOT_FOUND: '/page-not-found',
  NOT_AUTHORIZED: '/page-not-authorized',
  DASHBOARD: {
    name: 'Inicio',
    id: 'dashboard',
    route: '/',
    path: '/dashboard',
    icon: <HomeIcon className="text-white" />,
    pageName: 'HomePage',
    publicSections: [
      {
        name: 'Políticas de privacidad',
        id: 'privacy-policy',
        route: '/privacy-policy',
        path: '/dashboard/privacy-policy',
        icon: <PolicyIcon className="text-white" />,
        pageName: 'PrivacyPolicyPage',
        pages: [],
      },
      {
        name: 'Términos y condiciones',
        id: 'terms-and-conditions',
        route: '/terms-and-conditions',
        path: '/dashboard/terms-and-conditions',
        icon: <ContentPasteIcon className="text-white" />,
        pageName: 'TermsAndConditionsPage',
        pages: [],
      },
      {
        name: 'Acerca de',
        id: 'about',
        route: '/about',
        path: '/dashboard/about',
        icon: <InfoIcon className="text-white" />,
        pageName: 'AboutPage',
        pages: [],
      },
    ],
    modules: [
      {
        name: 'Módulo de seguridad',
        id: 'security',
        route: '/security',
        path: '/dashboard/security',
        icon: <SecurityIcon className="text-white" />,
        pageName: 'SecurityPage',
        sections: [
          {
            name: 'Usuarios',
            id: 'users',
            route: '/security/users',
            path: '/dashboard/security/users',
            icon: <SecurityIcon className="text-white" />,
            pageName: 'UsersPage',
            pages: [],
          },
          {
            name: 'Roles',
            id: 'roles',
            route: '/security/roles',
            path: '/dashboard/security/roles',
            icon: <VerifiedUserIcon className="text-white" />,
            pageName: 'RolesPage',
            pages: [],
          },
          {
            name: 'Permisos',
            id: 'permissions',
            route: '/security/permissions',
            path: '/dashboard/security/permissions',
            icon: <VerifiedUserIcon className="text-white" />,
            pageName: 'PermissionsPage',
            pages: [],
          },
        ],
      },
      {
        name: 'Módulo de desarrollo',
        id: 'development',
        route: '/development',
        path: '/dashboard/development',
        icon: <ScienceIcon className="text-white" />,
        pageName: 'ExamplesPage',
        sections: [
          {
            name: 'Textos y colores',
            id: 'text-and-colors',
            route: '/development/text-and-colors',
            path: '/dashboard/development/text-and-colors',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'TextPage',
            pages: [],
          },
          {
            name: 'Botones',
            id: 'buttons',
            route: '/development/buttons',
            path: '/dashboard/development/buttons',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'ButtonPage',
            pages: [],
          },
          {
            name: 'Componentes de entrada',
            id: 'inputs',
            route: '/development/inputs',
            path: '/dashboard/development/inputs',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'NotFoundPage',
            pages: [
              {
                name: 'Cajas de texto',
                id: 'text-box',
                route: '/development/inputs/text-box',
                path: '/dashboard/development/inputs/text-box',
                icon: <ExtensionIcon className="text-white" />,
                pageName: 'Inputs1Page',
              },
              {
                name: 'Cajas de texto con validación',
                id: 'text-box-validations',
                route: '/development/inputs/text-box-validations',
                path: '/dashboard/development/inputs/text-box-validations',
                icon: <ExtensionIcon className="text-white" />,
                pageName: 'Inputs2Page',
              },
              {
                name: 'Selects y datepickers',
                id: 'selects-and-datepickers',
                route: '/development/inputs/selects-and-datepickers',
                path: '/dashboard/development/inputs/selects-and-datepickers',
                icon: <ExtensionIcon className="text-white" />,
                pageName: 'Inputs3Page',
              },
              {
                name: 'Otros',
                id: 'others',
                route: '/development/inputs/others',
                path: '/dashboard/development/inputs/others',
                icon: <ExtensionIcon className="text-white" />,
                pageName: 'Inputs4Page',
              },
            ],
          },
          {
            name: 'Alertas',
            id: 'alerts',
            route: '/development/alerts',
            path: '/dashboard/development/alerts',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'AlertPage',
            pages: [],
          },
          {
            name: 'Animaciones',
            id: 'loaders',
            route: '/development/loaders',
            path: '/dashboard/development/loaders',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'LoaderPage',
            pages: [],
          },
          {
            name: 'Ventanas modales',
            id: 'modal-windows',
            route: '/development/modal-windows',
            path: '/dashboard/development/modal-windows',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'DialogPage',
            pages: [],
          },
          {
            name: 'Tablas',
            id: 'tables',
            route: '/development/tables',
            path: '/dashboard/development/tables',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'TablePage',
            pages: [],
          },
        ],
      },
    ],
  },
}
