import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@components'
import { useAppSelector } from '@redux'
import { ROUTES } from '@routes'
import { IModule, IModules, IRole, ISections } from '@interfaces'

export const DashboardRouter = () => {
  const roles = useAppSelector(state => state.auth.roles)
  const { DASHBOARD, HOME, NOT_FOUND, NOT_AUTHORIZED, EXAMPLE } = ROUTES

  const canAccess = (roles: IRole[], module: IModules, section: ISections) => {
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
          for (const section of sections) {
            // Verify action
            if (section.actions.includes(action)) {
              return true
            }
          }
        }
      }
    }
    return false
  }

  return (
    <DashboardLayout>
      <Routes>
        {/* Main route */}
        <Route path={HOME.path} element={<HOME.Page />} />

        {/* Protected routes */}
        {DASHBOARD.modules.map(MODULE => {
          return MODULE.sections.map(SECTION => {
            return (
              <Route
                key={MODULE.pathname + '/' + SECTION.pathname}
                path={MODULE.path + SECTION.path}
                element={
                  canAccess(
                    roles,
                    MODULE.pathname as IModules,
                    SECTION.pathname as ISections,
                  ) ? (
                    <SECTION.Page />
                  ) : (
                    <Navigate to={DASHBOARD.path + NOT_AUTHORIZED.path} />
                  )
                }
              />
            )
          })
        })}

        {/* Public routes */}
        {EXAMPLE.sections.map(SECTION => {
          return (
            <Route
              key={SECTION.pathname}
              path={EXAMPLE.path + SECTION.path}
              element={<SECTION.Page />}
            />
          )
        })}

        {/* Auxiliary routes */}
        <Route path={NOT_AUTHORIZED.path} element={<NOT_AUTHORIZED.Page />} />
        <Route path={NOT_FOUND.path} element={<NOT_FOUND.Page />} />
        <Route
          path="*"
          element={<Navigate to={DASHBOARD.path + NOT_FOUND.path} replace />}
        />
      </Routes>
    </DashboardLayout>
  )
}
