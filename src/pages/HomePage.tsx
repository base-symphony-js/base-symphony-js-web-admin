import { useAuthActions } from '@redux'
import { api } from '@config'
import { apiGetProfile, AuthStorage } from '@services'
import { ButtonCustom, PageLayout } from '@components'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()
  const { dispatchLogout } = useAuthActions()

  const handleProfile = async () => {
    const response = await apiGetProfile()
    console.log('HANDLE_PROFILE', response)
  }

  const handleLogout = (): string => {
    api.defaults.headers.Authorization = ''
    AuthStorage.removePersonalInfo()
    AuthStorage.removeTokens()
    dispatchLogout()
    return ''
  }

  return (
    <PageLayout title="Home">
      <p>HomePage</p>
      <ButtonCustom text="Profile" onClick={handleProfile} />
      <br />
      <br />
      <div className="flex flex-col gap-2">
        <ButtonCustom text="Home" onClick={() => navigate('/dashboard/home')} />
        <ButtonCustom
          text="Examples - Texts And Colors"
          onClick={() => navigate('/dashboard/examples/text-and-colors')}
        />
        <ButtonCustom
          text="Examples - Buttons"
          onClick={() => navigate('/dashboard/examples/buttons')}
        />
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-2">
        <ButtonCustom
          text="Examples - Inputs 1"
          onClick={() => navigate('/dashboard/examples/inputs1')}
        />
        <ButtonCustom
          text="Examples - Inputs 2"
          onClick={() => navigate('/dashboard/examples/inputs2')}
        />
        <ButtonCustom
          text="Examples - Inputs 3"
          onClick={() => navigate('/dashboard/examples/inputs3')}
        />
        <ButtonCustom
          text="Examples - Inputs 4"
          onClick={() => navigate('/dashboard/examples/inputs4')}
        />
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-2">
        <ButtonCustom
          text="Examples - Alerts"
          onClick={() => navigate('/dashboard/examples/alerts')}
        />
        <ButtonCustom
          text="Examples - Alerts Modal"
          onClick={() => navigate('/dashboard/examples/alerts-modal')}
        />
        <ButtonCustom
          text="Examples - Dialogs"
          onClick={() => navigate('/dashboard/examples/dialogs')}
        />
        <ButtonCustom
          text="Examples - Loaders"
          onClick={() => navigate('/dashboard/examples/loaders')}
        />
      </div>
      <br />
      <br />
      <ButtonCustom text="Logout" onClick={handleLogout} />
    </PageLayout>
  )
}
