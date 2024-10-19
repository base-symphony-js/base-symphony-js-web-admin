import {
  ExtensionIcon,
  GroupsIcon,
  HomeCustomIcon,
  ScienceIcon,
  SecurityIcon,
  VerifiedUserIcon,
} from '@assets'
import {
  AlertModalPage,
  AlertPage,
  ButtonPage,
  DialogPage,
  HomePage,
  Inputs1Page,
  Inputs2Page,
  Inputs3Page,
  Inputs4Page,
  LoaderPage,
  LoginPage,
  NotAuthorizedPage,
  NotFoundPage,
  PermissionsPage,
  RolesPage,
  TablePage,
  TextPage,
  UsersPage,
} from '@pages'

const ROUTES = {
  HOME: {
    name: 'Inicio',
    Icon: HomeCustomIcon,
    path: '/',
    pathname: '',
    Page: HomePage,
  },
  LOGIN: {
    name: 'Inicio de sesión',
    Icon: HomeCustomIcon,
    path: '/login',
    pathname: 'login',
    Page: LoginPage,
  },
  NOT_FOUND: {
    name: 'Página no encontrada',
    Icon: HomeCustomIcon,
    path: '/page-not-found',
    pathname: 'page-not-found',
    Page: NotFoundPage,
  },
  NOT_AUTHORIZED: {
    name: 'Página no authorizada',
    Icon: HomeCustomIcon,
    path: '/page-not-authorized',
    pathname: 'page-not-authorized',
    Page: NotAuthorizedPage,
  },
  EXAMPLE: {
    name: 'Ejemplos',
    Icon: ScienceIcon,
    path: '/examples',
    pathname: 'examples',
    sections: [
      {
        name: 'Textos y colores',
        Icon: ExtensionIcon,
        path: '/text-and-colors',
        pathname: 'text-and-colors',
        Page: TextPage,
      },
      {
        name: 'Botones',
        Icon: ExtensionIcon,
        path: '/buttons',
        pathname: 'buttons',
        Page: ButtonPage,
      },
      {
        name: 'Elementos 1',
        Icon: ExtensionIcon,
        path: '/inputs1',
        pathname: 'inputs1',
        Page: Inputs1Page,
      },
      {
        name: 'Elementos 2',
        Icon: ExtensionIcon,
        path: '/inputs2',
        pathname: 'inputs2',
        Page: Inputs2Page,
      },
      {
        name: 'Elementos 3',
        Icon: ExtensionIcon,
        path: '/inputs3',
        pathname: 'inputs3',
        Page: Inputs3Page,
      },
      {
        name: 'Elementos 4',
        Icon: ExtensionIcon,
        path: '/inputs4',
        pathname: 'inputs4',
        Page: Inputs4Page,
      },
      {
        name: 'Alertas',
        Icon: ExtensionIcon,
        path: '/alerts',
        pathname: 'alerts',
        Page: AlertPage,
      },
      {
        name: 'Alertas modales',
        Icon: ExtensionIcon,
        path: '/alerts-modal',
        pathname: 'alerts-modal',
        Page: AlertModalPage,
      },
      {
        name: 'Animaciones de carga',
        Icon: ExtensionIcon,
        path: '/loaders',
        pathname: 'loaders',
        Page: LoaderPage,
      },
      {
        name: 'Ventanas modales',
        Icon: ExtensionIcon,
        path: '/modal-windows',
        pathname: 'modal-windows',
        Page: DialogPage,
      },
      {
        name: 'Tablas',
        Icon: ExtensionIcon,
        path: '/tables',
        pathname: 'tables',
        Page: TablePage,
      },
    ],
  },
  DASHBOARD: {
    name: 'Panel',
    Icon: HomeCustomIcon,
    path: '/dashboard',
    pathname: 'dashboard',
    modules: [
      {
        name: 'Seguridad',
        Icon: SecurityIcon,
        path: '/security',
        pathname: 'security',
        sections: [
          {
            name: 'Usuarios',
            Icon: GroupsIcon,
            path: '/users',
            pathname: 'users',
            Page: UsersPage,
          },
          {
            name: 'Roles',
            Icon: VerifiedUserIcon,
            path: '/roles',
            pathname: 'roles',
            Page: RolesPage,
          },
          {
            name: 'Permisos',
            Icon: VerifiedUserIcon,
            path: '/permissions',
            pathname: 'permissions',
            Page: PermissionsPage,
          },
        ],
      },
    ],
  },
}

export default ROUTES