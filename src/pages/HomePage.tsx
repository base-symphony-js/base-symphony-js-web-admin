import { useAuthActions } from '../redux'
import { api } from '../common'
import { apiGetProfile } from '../services'

export const HomePage = () => {
  const { dispatchLogout } = useAuthActions()

  const handleProfile = async () => {
    const response = await apiGetProfile()
    console.log('HANDLE_PROFILE', response)
  }

  const handleLogout = () => {
    api.defaults.headers.Authorization = ''
    dispatchLogout()
  }

  return (
    <div>
      <p>HomePage</p>
      <button
        onClick={handleProfile}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Profile
      </button>
      <button
        onClick={handleLogout}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Logout
      </button>
    </div>
  )
}
