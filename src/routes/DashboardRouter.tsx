import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@components'
import { useAppSelector } from '@redux'
import { ROUTES, canAccess } from '@routes'
import {
  AboutPage,
  AlertPage,
  ButtonPage,
  DialogPage,
  ExamplesPage,
  HomePage,
  Inputs1Page,
  Inputs2Page,
  Inputs3Page,
  Inputs4Page,
  LoaderPage,
  NotAuthorizedPage,
  NotFoundPage,
  PermissionsPage,
  PrivacyPolicyPage,
  RolesPage,
  SecurityPage,
  TablePage,
  TermsAndConditionsPage,
  TextPage,
  UsersPage,
} from '@pages'

export const DashboardRouter = () => {
  const roles = useAppSelector(state => state.auth.roles)
  const { DASHBOARD, NOT_FOUND, NOT_AUTHORIZED } = ROUTES

  const routes = [
    // DASHBOARD
    {
      access: true,
      path: DASHBOARD.route,
      Component: HomePage,
    },
    {
      access: true,
      path: DASHBOARD.PRIVACY_POLICY.route,
      Component: PrivacyPolicyPage,
    },
    {
      access: true,
      path: DASHBOARD.TERMS_AND_CONDITIONS.route,
      Component: TermsAndConditionsPage,
    },
    {
      access: true,
      path: DASHBOARD.ABOUT.route,
      Component: AboutPage,
    },
    // SECURITY
    {
      access: true,
      path: DASHBOARD.SECURITY.route,
      Component: SecurityPage,
    },
    {
      access: canAccess(roles, 'security', 'users'),
      path: DASHBOARD.SECURITY.USERS.route,
      Component: UsersPage,
    },
    {
      access: canAccess(roles, 'security', 'roles'),
      path: DASHBOARD.SECURITY.ROLES.route,
      Component: RolesPage,
    },
    {
      access: canAccess(roles, 'security', 'permissions'),
      path: DASHBOARD.SECURITY.PERMISSIONS.route,
      Component: PermissionsPage,
    },
    // EXAMPLES
    {
      access: true,
      path: DASHBOARD.EXAMPLES.route,
      Component: ExamplesPage,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.ALERTS.route,
      Component: AlertPage,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.BUTTONS.route,
      Component: ButtonPage,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.INPUTS_1.route,
      Component: Inputs1Page,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.INPUTS_2.route,
      Component: Inputs2Page,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.INPUTS_3.route,
      Component: Inputs3Page,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.INPUTS_4.route,
      Component: Inputs4Page,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.LOADERS.route,
      Component: LoaderPage,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.MODAL_WINDOWS.route,
      Component: DialogPage,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.TABLES.route,
      Component: TablePage,
    },
    {
      access: true,
      path: DASHBOARD.EXAMPLES.TEXT_AND_COLORS.route,
      Component: TextPage,
    },
  ]

  return (
    <DashboardLayout>
      <Routes>
        {/* Protected and public routes */}
        {routes.map(({ access, path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              access ? <Component /> : <Navigate to={NOT_AUTHORIZED.route} />
            }
          />
        ))}

        {/* Auxiliary routes */}
        <Route path={NOT_AUTHORIZED.route} element={<NotAuthorizedPage />} />
        <Route path={NOT_FOUND.route} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={NOT_FOUND.route} replace />} />
      </Routes>
    </DashboardLayout>
  )
}
