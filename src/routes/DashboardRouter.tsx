import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@components'
import { useAppSelector } from '@redux'
import { ROUTES, canAccess } from '@routes'
import {
  AlertPage,
  ButtonPage,
  DialogPage,
  HomePage,
  Inputs1Page,
  Inputs2Page,
  Inputs3Page,
  Inputs4Page,
  LoaderPage,
  NotAuthorizedPage,
  NotFoundPage,
  PermissionsPage,
  RolesPage,
  TablePage,
  TextPage,
  UsersPage,
} from '@pages'

export const DashboardRouter = () => {
  const roles = useAppSelector(state => state.auth.roles)
  const { DASHBOARD, HOME, NOT_FOUND, NOT_AUTHORIZED } = ROUTES
  const { EXAMPLES, SECURITY } = DASHBOARD

  const routes = [
    // SECURITY
    {
      access: canAccess(roles, 'security', 'users'),
      path: SECURITY.USERS.replace('/dashboard', ''),
      Component: UsersPage,
    },
    {
      access: canAccess(roles, 'security', 'roles'),
      path: SECURITY.ROLES.replace('/dashboard', ''),
      Component: RolesPage,
    },
    {
      access: canAccess(roles, 'security', 'permissions'),
      path: SECURITY.PERMISSIONS.replace('/dashboard', ''),
      Component: PermissionsPage,
    },
    // EXAMPLES
    {
      access: true,
      path: EXAMPLES.ALERTS.replace('/dashboard', ''),
      Component: AlertPage,
    },
    {
      access: true,
      path: EXAMPLES.BUTTONS.replace('/dashboard', ''),
      Component: ButtonPage,
    },
    {
      access: true,
      path: EXAMPLES.INPUTS_1.replace('/dashboard', ''),
      Component: Inputs1Page,
    },
    {
      access: true,
      path: EXAMPLES.INPUTS_2.replace('/dashboard', ''),
      Component: Inputs2Page,
    },
    {
      access: true,
      path: EXAMPLES.INPUTS_3.replace('/dashboard', ''),
      Component: Inputs3Page,
    },
    {
      access: true,
      path: EXAMPLES.INPUTS_4.replace('/dashboard', ''),
      Component: Inputs4Page,
    },
    {
      access: true,
      path: EXAMPLES.LOADERS.replace('/dashboard', ''),
      Component: LoaderPage,
    },
    {
      access: true,
      path: EXAMPLES.MODAL_WINDOWS.replace('/dashboard', ''),
      Component: DialogPage,
    },
    {
      access: true,
      path: EXAMPLES.TABLES.replace('/dashboard', ''),
      Component: TablePage,
    },
    {
      access: true,
      path: EXAMPLES.TEXT_AND_COLORS.replace('/dashboard', ''),
      Component: TextPage,
    },
  ]

  return (
    <DashboardLayout>
      <Routes>
        {/* Main route */}
        <Route path={HOME} element={<HomePage />} />

        {/* Protected routes */}
        {routes.map(({ access, path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              access ? (
                <Component />
              ) : (
                <Navigate to={'/dashboard' + NOT_AUTHORIZED} />
              )
            }
          />
        ))}

        {/* Auxiliary routes */}
        <Route path={NOT_AUTHORIZED} element={<NotAuthorizedPage />} />
        <Route path={NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path="*"
          element={<Navigate to={'/dashboard' + NOT_FOUND} replace />}
        />
      </Routes>
    </DashboardLayout>
  )
}
