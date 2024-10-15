import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { PrivateRoute, PublicRoute, DashboardRouter, ROUTES } from '@routes'
import { useAppSelector } from '@redux'

export const AppRouter = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const { LOGIN, DASHBOARD, NOT_FOUND } = ROUTES

  return (
    <Router>
      <Routes>
        <Route
          path={LOGIN.path}
          element={<PublicRoute element={LOGIN.Page} isAuth={isAuth} />}
        />
        <Route
          path={DASHBOARD.path + '/*'}
          element={<PrivateRoute element={DashboardRouter} isAuth={isAuth} />}
        />
        <Route path={NOT_FOUND.path} element={<NOT_FOUND.Page />} />
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to={DASHBOARD.path} replace />
            ) : (
              <Navigate to={LOGIN.path} replace />
            )
          }
        />
        <Route path="*" element={<Navigate to={NOT_FOUND.path} replace />} />
      </Routes>
    </Router>
  )
}
