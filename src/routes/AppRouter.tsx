import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { PrivateRoute, PublicRoute, DashboardRouter, ROUTES } from '@routes'
import { useAppSelector } from '@redux'
import {
  LoginPage,
  NotFoundPage,
  RecoveryAcconutPage,
  RegisterPage,
} from '@pages'

export const AppRouter = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const { MAIN, LOGIN, REGISTER, RECOVERY_ACCOUNT, NOT_FOUND, DASHBOARD } =
    ROUTES

  return (
    <Router>
      <Routes>
        <Route
          path={LOGIN}
          element={<PublicRoute element={LoginPage} isAuth={isAuth} />}
        />
        <Route
          path={REGISTER}
          element={<PublicRoute element={RegisterPage} isAuth={isAuth} />}
        />
        <Route
          path={RECOVERY_ACCOUNT}
          element={
            <PublicRoute element={RecoveryAcconutPage} isAuth={isAuth} />
          }
        />
        <Route
          path={DASHBOARD.path + '/*'}
          element={<PrivateRoute element={DashboardRouter} isAuth={isAuth} />}
        />
        <Route path={NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path={MAIN}
          element={
            isAuth ? (
              <Navigate to={DASHBOARD.path} replace />
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
