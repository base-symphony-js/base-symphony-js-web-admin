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
  const { LOGIN, NOT_FOUND } = ROUTES

  return (
    <Router>
      <Routes>
        <Route
          path={LOGIN}
          element={<PublicRoute element={LoginPage} isAuth={isAuth} />}
        />
        <Route
          path={'/dashboard/*'}
          element={<PrivateRoute element={DashboardRouter} isAuth={isAuth} />}
        />
        <Route path={NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to={'/dashboard'} replace />
            ) : (
              <Navigate to={LOGIN} replace />
            )
          }
        />
        <Route path="*" element={<Navigate to={NOT_FOUND} replace />} />
      </Routes>
    </Router>
  )
}
