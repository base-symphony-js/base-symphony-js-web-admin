import { apiGetProfile } from '@services'
import { ButtonCustom, PageLayout } from '@components'

export const HomePage = () => {
  const handleProfile = async () => {
    const response = await apiGetProfile()
    console.log('HANDLE_PROFILE', response)
  }

  return (
    <PageLayout title="Home">
      <p>HomePage</p>
      <ButtonCustom text="Profile" onClick={handleProfile} />
    </PageLayout>
  )
}
