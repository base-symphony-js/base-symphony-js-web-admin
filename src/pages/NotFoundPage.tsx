import { ButtonCustom, PageLayout, TextCustom } from '@components'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <PageLayout>
      <div className="rounded-lg text-center">
        <TextCustom
          text="404 - Página No Encontrada"
          className="text-2xl font-bold text-error font-poppins"
        />
        <TextCustom
          text="La página que buscas no existe o ha sido movida."
          className="mt-4"
        />
        <TextCustom
          text="Puedes intentar buscar otra página o volver al inicio."
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
