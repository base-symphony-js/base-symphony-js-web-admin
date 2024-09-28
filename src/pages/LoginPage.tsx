import { useState } from 'react'
import { useAuthActions } from '../redux'

export const LoginPage = () => {
  const { dispatchLogin } = useAuthActions()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log(password)
    dispatchLogin(
      {
        firstName: 'Luis',
        lastName: 'Solano',
        email,
      },
      {
        accessToken: '1',
        refreshToken: '2',
      },
    )
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
        onClick={handleLogin}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Login
      </button>
    </div>
  )
}
