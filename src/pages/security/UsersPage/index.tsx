import { useEffect, useState } from 'react'
import { ButtonCustom, PageLayout } from '@components'
import { apiGetUsers } from './services'
import { useCustomFetch } from '@hooks'

export const UsersPage = () => {
  const { customFetch } = useCustomFetch()
  const [isSessionExpired, setIsSessionExpired] = useState(false)

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const response = await customFetch(apiGetUsers, {})
    const { success, statusCode, message, data } = response
    if (success) {
      console.log(data)
    } else {
      if (statusCode === 401) setIsSessionExpired(true)
      console.log(message)
    }
  }

  return (
    <PageLayout title="UsersPage" isSessionExpired={isSessionExpired}>
      <p>UsersPage</p>
      <ButtonCustom text="Get Users" onClick={loadUsers} />
    </PageLayout>
  )
}
