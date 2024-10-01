import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
  isAuth: boolean
  element: React.FunctionComponent
}

export const PublicRoute = ({ isAuth, element: Element }: PublicRouteProps) => {
  return isAuth ? <Navigate to="/dashboard" replace /> : <Element />
}
