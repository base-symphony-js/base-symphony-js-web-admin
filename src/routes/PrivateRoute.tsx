import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  isAuth: boolean
  element: React.FunctionComponent
}

export const PrivateRoute = ({
  isAuth,
  element: Element,
}: PrivateRouteProps) => {
  return isAuth ? <Element /> : <Navigate to="/login" replace />
}
