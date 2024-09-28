import { useAuthActions } from '../redux'

export const HomePage = () => {
  const { dispatchLogout } = useAuthActions()

  const handleLogout = () => {
    dispatchLogout()
  }

  return (
    <div>
      <p>HomePage</p>
      <button
        onClick={handleLogout}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Logout
      </button>
    </div>
  )
}
