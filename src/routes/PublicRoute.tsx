import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface PublicRouteProps {
  isAuth: boolean
  element: React.FunctionComponent
}

export const PublicRoute = ({ isAuth, element: Element }: PublicRouteProps) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard/home', { replace: true })
    } else {
      navigate('/login', { replace: true })
    }
  }, [isAuth])

  return <Element />
}
