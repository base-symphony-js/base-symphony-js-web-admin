import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { PrivateRoute, PublicRoute, DashboardRouter, ROUTES } from '@routes'
import { useAppSelector } from '@redux'
import { LoginPage, NotFoundPage } from '@pages'

export const AppRouter = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const { MAIN, LOGIN, NOT_FOUND, DASHBOARD } = ROUTES

  return (
    <Router>
      <Routes>
        <Route
          path={LOGIN.route}
          element={<PublicRoute element={LoginPage} isAuth={isAuth} />}
        />
        <Route
          path={DASHBOARD.path + '/*'}
          element={<PrivateRoute element={DashboardRouter} isAuth={isAuth} />}
        />
        <Route path={NOT_FOUND.route} element={<NotFoundPage />} />
        <Route
          path={MAIN.route}
          element={
            isAuth ? (
              <Navigate to={DASHBOARD.path} replace />
            ) : (
              <Navigate to={LOGIN.route} replace />
            )
          }
        />
        <Route path="*" element={<Navigate to={NOT_FOUND.route} replace />} />
      </Routes>
    </Router>
  )
}
