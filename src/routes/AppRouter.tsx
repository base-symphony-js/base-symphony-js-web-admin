import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { ErrorPage, LoginPage } from '@pages'
import { PublicRoute, PrivateRoute, DashboardRouter } from '@routes'
import { useAppSelector } from '@redux'

export const AppRouter = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth)
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute element={LoginPage} isAuth={isAuth} />}
        />
        <Route
          path="/dashboard/*"
          element={<PrivateRoute element={DashboardRouter} isAuth={isAuth} />}
        />
        <Route path="/page-error" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </Router>
  )
}
