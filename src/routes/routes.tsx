/*
 * Copyright (c) 2025 Luis Solano. All rights reserved.
 * Licensed under the MIT License. See the LICENSE file in the root of this repository for more information.
 */
import { IRole } from '@interfaces'
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
import { ITranslation } from '@languages'

export interface IPagesRoute {
  id: keyof ITranslation
  route: string
  path: string
  icon: React.ReactElement<SvgIconProps> | null
  pageName: string
  pages: IPagesRoute[]
}

export interface IROUTES {
  MAIN: string
  LOGIN: string
  REGISTER: string
  RECOVERY_ACCOUNT: string
  NOT_FOUND: string
  NOT_AUTHORIZED: string
  PROFILE: string
  DASHBOARD: {
    id: keyof ITranslation
    route: string
    path: string
    icon: React.ReactElement<SvgIconProps> | null
    pageName: string
    publicPages: IPagesRoute[]
    privatePages: IPagesRoute[]
    hiddenPages: IPagesRoute[]
  }
}

export const canAccess = (
  roles: IRole[],
  permissions: string[],
  path: string,
) => {
  // Check is owner
  const isOwnerRole = roles.some(item => item.type === 'owner')
  if (isOwnerRole) return true

  // Check if all elements of the route are in the permission list
  const pathPermissions = path.slice(1).split('/')
  return pathPermissions.every(item => permissions.includes(item))
}

export const generateRoutes = (
  pages: IPagesRoute[],
  roles: IRole[],
  permissions: string[],
  pagesMap: any,
  defaultAccess: boolean,
): any => {
  // Iterate over each page
  return pages.flatMap(page => {
    // Generate route information for the current page
    const routeInfo = {
      access: defaultAccess ? true : canAccess(roles, permissions, page.route), // Check if user has access
      path: page.route, // The path of the current page
      Component: pagesMap[page.pageName], // The component to render for this page
    }

    // Recursively generate routes for sub-pages if they exist
    const subRoutes = page.pages
      ? generateRoutes(page.pages, roles, permissions, pagesMap, defaultAccess)
      : []

    // Return both the current route and the sub-routes (if any)
    return [routeInfo, ...subRoutes]
  })
}

export const ROUTES: IROUTES = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  RECOVERY_ACCOUNT: '/recovery-account',
  NOT_FOUND: '/page-not-found',
  NOT_AUTHORIZED: '/page-not-authorized',
  PROFILE: '/profile',
  DASHBOARD: {
    id: 'MENU_HOME',
    route: '/',
    path: '/dashboard',
    icon: <HomeIcon className="text-white" />,
    pageName: 'HomePage',
    publicPages: [
      {
        id: 'MENU_PRIVACY_POLICY',
        route: '/privacy-policy',
        path: '/dashboard/privacy-policy',
        icon: <PolicyIcon className="text-white" />,
        pageName: 'PrivacyPolicyPage',
        pages: [],
      },
      {
        id: 'MENU_TERMNS_AND_CONDITIONS',
        route: '/terms-and-conditions',
        path: '/dashboard/terms-and-conditions',
        icon: <ContentPasteIcon className="text-white" />,
        pageName: 'TermsAndConditionsPage',
        pages: [],
      },
      {
        id: 'MENU_ABOUT',
        route: '/about',
        path: '/dashboard/about',
        icon: <InfoIcon className="text-white" />,
        pageName: 'AboutPage',
        pages: [],
      },
    ],
    privatePages: [
      {
        id: 'MENU_SECURITY',
        route: '/security',
        path: '/dashboard/security',
        icon: <SecurityIcon className="text-white" />,
        pageName: 'SecurityPage',
        pages: [
          {
            id: 'MENU_SECURITY_USERS',
            route: '/security/users',
            path: '/dashboard/security/users',
            icon: <SecurityIcon className="text-white" />,
            pageName: 'UsersPage',
            pages: [],
          },
          {
            id: 'MENU_SECURITY_ROLES',
            route: '/security/roles',
            path: '/dashboard/security/roles',
            icon: <VerifiedUserIcon className="text-white" />,
            pageName: 'RolesPage',
            pages: [],
          },
          {
            id: 'MENU_SECURITY_PERMISSIONS',
            route: '/security/permissions',
            path: '/dashboard/security/permissions',
            icon: <VerifiedUserIcon className="text-white" />,
            pageName: 'PermissionsPage',
            pages: [],
          },
        ],
      },
    ],
    hiddenPages: [
      {
        id: 'MENU_DEVELOPMENT',
        route: '/development',
        path: '/dashboard/development',
        icon: <ScienceIcon className="text-white" />,
        pageName: 'DevelopmentPage',
        pages: [
          {
            id: 'MENU_DEVELOPMENT_TEXT_AND_COLORS',
            route: '/development/text-and-colors',
            path: '/dashboard/development/text-and-colors',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'TextPage',
            pages: [],
          },
          {
            id: 'MENU_DEVELOPMENT_BUTTONS',
            route: '/development/buttons',
            path: '/dashboard/development/buttons',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'ButtonPage',
            pages: [],
          },
          {
            id: 'MENU_DEVELOPMENT_INPUTS',
            route: '/development/inputs',
            path: '/dashboard/development/inputs',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'NotFoundPage',
            pages: [
              {
                id: 'MENU_DEVELOPMENT_INPUTS_TEXT_BOX',
                route: '/development/inputs/text-box',
                path: '/dashboard/development/inputs/text-box',
                icon: <ExtensionIcon className="text-white" />,
                pageName: 'Inputs1Page',
                pages: [],
              },
              {
                id: 'MENU_DEVELOPMENT_INPUTS_TEXT_BOX_VALIDATIONS',
                route: '/development/inputs/text-box-validations',
                path: '/dashboard/development/inputs/text-box-validations',
                icon: <ExtensionIcon className="text-white" />,
                pageName: 'Inputs2Page',
                pages: [],
              },
              {
                id: 'MENU_DEVELOPMENT_INPUTS_SELECTS_AND_DATEPICKERS',
                route: '/development/inputs/selects-and-datepickers',
                path: '/dashboard/development/inputs/selects-and-datepickers',
                icon: <ExtensionIcon className="text-white" />,
                pageName: 'Inputs3Page',
                pages: [],
              },
              {
                id: 'MENU_DEVELOPMENT_INPUTS_OTHERS',
                route: '/development/inputs/others',
                path: '/dashboard/development/inputs/others',
                icon: <ExtensionIcon className="text-white" />,
                pageName: 'Inputs4Page',
                pages: [],
              },
            ],
          },
          {
            id: 'MENU_DEVELOPMENT_ALERTS',
            route: '/development/alerts',
            path: '/dashboard/development/alerts',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'AlertPage',
            pages: [],
          },
          {
            id: 'MENU_DEVELOPMENT_LOADERS',
            route: '/development/loaders',
            path: '/dashboard/development/loaders',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'LoaderPage',
            pages: [],
          },
          {
            id: 'MENU_DEVELOPMENT_MODAL_WINDOWS',
            route: '/development/modal-windows',
            path: '/dashboard/development/modal-windows',
            icon: <ExtensionIcon className="text-white" />,
            pageName: 'DialogPage',
            pages: [],
          },
          {
            id: 'MENU_DEVELOPMENT_TABLES',
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
