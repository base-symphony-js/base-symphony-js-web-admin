import { useAuthActions } from '@redux'
import { api } from '@config'
import { apiGetProfile, AuthStorage } from '@services'
import { PageLayout } from '@components'
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
      <button
        onClick={handleProfile}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Profile
      </button>
      <br />
      <br />
      <button
        onClick={() => navigate('/dashboard/home')}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Home
      </button>
      <button
        onClick={() => navigate('/dashboard/examples/alerts')}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Examples - Alerts
      </button>
      <button
        onClick={() => navigate('/dashboard/examples/buttons')}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Examples - Buttons
      </button>
      <button
        onClick={() => navigate('/dashboard/examples/loaders')}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Examples - Loaders
      </button>
      <button
        onClick={() => navigate('/dashboard/examples/text-and-colors')}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Examples - Texts And Colors
      </button>
      <br />
      <br />
      <button
        onClick={handleLogout}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Logout
      </button>
    </PageLayout>
  )
}
