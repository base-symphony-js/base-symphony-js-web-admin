import { useState } from 'react'
import { useAuthActions } from '../redux'
import { apiGetProfile, apiLogin } from '../services'
import { api } from '../common'

export const LoginPage = () => {
  const { dispatchLogin } = useAuthActions()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const response = await apiLogin({ body: { email, password } })
    const { success, data } = response
    console.log('HANDLE_LOGIN', response)
    if (success) {
      api.defaults.headers.Authorization = `Bearer ${data?.tokens?.accessToken}`
      dispatchLogin(
        {
          firstName: data?.user?.firstName,
          lastName: data?.user?.lastName,
          email: data?.user?.email,
          photo: data?.user?.photo,
          phoneNumber: data?.user?.phoneNumber,
        },
        {
          accessToken: data?.tokens?.accessToken,
          refreshToken: data?.tokens?.accessToken,
        },
      )
    }
  }

  const handleProfile = async () => {
    const response = await apiGetProfile()
    console.log('HANDLE_PROFILE', response)
  }

  return (
    <div className="border rounded-md p-2 shadow-md m-2">
      <p>Login</p>
      <div>
        <label htmlFor="">Email:</label>
        <input
          className="border rounded-md p-2 mx-2"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input
          className="border rounded-md p-2 mx-2"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        onClick={handleProfile}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Profile
      </button>
      <button
        onClick={handleLogin}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Login
      </button>
    </div>
  )
}
