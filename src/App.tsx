import { Provider } from 'react-redux'
import { store } from './redux'
import AppRouter from './routes/AppRouter'

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
