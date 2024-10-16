import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { store } from './redux'
import App from './App.tsx'
import './index.css'
import { PreferencesContextProvider } from '@hooks'
import { VITE_GOOGLE_CLIENT_ID } from '@common'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PreferencesContextProvider>
      <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </PreferencesContextProvider>
  </Provider>,
)
