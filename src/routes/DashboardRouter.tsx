import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@components'
import { useAppSelector } from '@redux'
import { ROUTES, canAccess, generateRoutes } from '@routes'
import * as Pages from '@pages'
import { VITE_DEVELOPMENT_MODE } from '@common'

export const DashboardRouter = () => {
  const { roles, permissions } = useAppSelector(state => state.auth)
  const { MAIN, DASHBOARD, NOT_FOUND, NOT_AUTHORIZED, PROFILE } = ROUTES
  const { NotAuthorizedPage, NotFoundPage, HomePage } = Pages

  const getAllRoutes = () => {
    // Public routes
    const publicRoutes = generateRoutes(
      DASHBOARD.publicPages,
      roles,
      permissions,
      Pages,
      true,
    )

    // Private routes
    const privateRoutes = generateRoutes(
      DASHBOARD.privatePages,
      roles,
      permissions,
      Pages,
      false,
    )

    // Hidden routes
    const hiddenRoutes = VITE_DEVELOPMENT_MODE
      ? generateRoutes(DASHBOARD.hiddenPages, roles, permissions, Pages, true)
      : []

    // Custom routes
    const customRoutes = [
      {
        access: canAccess(roles, permissions, '/security/users'),
        path: '/security/users/:idUser',
        Component: Pages.UserPage,
      },
      {
        access: true,
        path: PROFILE,
        Component: Pages.ProfilePage,
      },
    ]

    // All routes
    return [...publicRoutes, ...privateRoutes, ...hiddenRoutes, ...customRoutes]
  }

  return (
    <DashboardLayout>
      <Routes>
        {/* Main route */}
        <Route path={MAIN} element={<HomePage />} />
        <Route path={DASHBOARD.route} element={<HomePage />} />
        {/* Public and private routes */}
        {getAllRoutes().map(({ access, path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              access ? (
                <Component />
              ) : (
                <Navigate to={DASHBOARD.path + NOT_AUTHORIZED} />
              )
            }
          />
        ))}
        {/* Auxiliary routes */}
        <Route path={NOT_AUTHORIZED} element={<NotAuthorizedPage />} />
        <Route path={NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path="*"
          element={<Navigate to={DASHBOARD.path + NOT_FOUND} replace />}
        />
      </Routes>
    </DashboardLayout>
  )
}
