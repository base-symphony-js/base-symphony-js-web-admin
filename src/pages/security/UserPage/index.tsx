import { useEffect, useState } from 'react'
import { IAlert, PageLayout } from '@components'
import { useCustomFetch } from '@hooks'
import { apiGetUser } from '@services'
import { useParams } from 'react-router-dom'

export const UserPage = () => {
  const { customFetch } = useCustomFetch()
  const { idUser } = useParams()
  const [user, setUser] = useState<any>(null)
  const [alert, setAlert] = useState({} as IAlert)
  const [loader, setLoader] = useState(false)
  const [isSessionExpired, setIsSessionExpired] = useState(false)

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    setLoader(true)
    const response = await customFetch(apiGetUser, { params: { idUser } })
    const { success, statusCode, message, data } = response
    if (success) {
      console.log(data)
      setUser(data.user)
    } else {
      if (statusCode === 401) setIsSessionExpired(true)
      setAlert({
        open: true,
        title: statusCode >= 500 ? 'Error' : 'Advertencia',
        description: message,
        severity: statusCode >= 500 ? 'error' : 'warning',
      })
    }
    setLoader(false)
  }

  return (
    <PageLayout>
      <p>UserPage</p>
    </PageLayout>
  )
}
