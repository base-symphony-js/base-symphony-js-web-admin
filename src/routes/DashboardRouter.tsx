import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@components'
import { useAppSelector } from '@redux'
import { ROUTES, canAccess } from '@routes'
import * as pages from '@pages'
import { IModules, ISections } from '@interfaces'

export const DashboardRouter = () => {
  const roles = useAppSelector(state => state.auth.roles)
  const { DASHBOARD, NOT_FOUND, NOT_AUTHORIZED } = ROUTES
  const { NotAuthorizedPage, NotFoundPage, HomePage } = pages
  const pagesMap: any = pages

  const getAllRoutes = () => {
    // Public routes
    const publicRoutes = DASHBOARD.publicSections.flatMap(section => {
      return [
        {
          access: true,
          path: section.route,
          Component: pagesMap[section.pageName],
        },
        ...section.pages.map(page => ({
          access: true,
          path: page.route,
          Component: pagesMap[page.pageName],
        })),
      ]
    })

    // Protected routes
    const moduleRoutes = DASHBOARD.modules.flatMap(module => {
      const moduleSections = module.sections.flatMap(section => {
        return [
          {
            access: canAccess(
              roles,
              module.id as IModules,
              section.id as ISections,
            ),
            path: section.route,
            Component: pagesMap[section.pageName],
          },
          ...section.pages.map(page => ({
            access: canAccess(
              roles,
              module.id as IModules,
              section.id as ISections,
            ),
            path: page.route,
            Component: pagesMap[page.pageName],
          })),
        ]
      })
      return [
        {
          access: true,
          path: module.route,
          Component: pagesMap[module.pageName],
        },
        ...moduleSections,
      ]
    })

    // Custom routes
    const customRoutes = [
      {
        access: canAccess(roles, 'security', 'users'),
        path: '/security/users/:idUser',
        Component: pages.UserPage,
      },
      {
        access: true,
        path: '/profile',
        Component: pages.ProfilePage,
      },
    ]

    // All routes
    return [
      {
        access: true,
        path: DASHBOARD.route,
        Component: pagesMap[DASHBOARD.pageName],
      },
      ...publicRoutes,
      ...moduleRoutes,
      ...customRoutes,
    ]
  }

  return (
    <DashboardLayout>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<HomePage />} />
        {/* Public and protected routes */}
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
