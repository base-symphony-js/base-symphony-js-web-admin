import { useEffect } from 'react'
import { Provider } from 'react-redux'
import AppRouter from './routes/AppRouter'
import { store } from './redux'
import { apiInterceptor } from './common'

const App = () => {
  useEffect(() => {
    apiInterceptor()
  }, [])

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
