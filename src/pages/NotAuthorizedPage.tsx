import { ButtonCustom, PageLayout, TextCustom } from '@components'
import { useNavigate } from 'react-router-dom'

export const NotAuthorizedPage = () => {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <PageLayout>
      <div className="rounded-lg text-center">
        <TextCustom
          text="Acceso Denegado"
          className="text-2xl font-bold text-error"
        />
        <TextCustom
          text="No tienes permisos para acceder a esta página."
          className="mt-4"
        />
        <TextCustom
          text="Si crees que esto es un error, contacta al administrador."
          className="mt-4"
        />
        <ButtonCustom
          text="Volver al Inicio"
          onClick={handleBackToHome}
          className="mt-4"
        />
      </div>
    </PageLayout>
  )
}
