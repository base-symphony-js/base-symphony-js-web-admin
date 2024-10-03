import { useState } from 'react'
// import { Box } from '@mui/material'
import {
  DrawerItem,
  DropdownCustom,
  // LanguagesComponent,
  ProfileComponent,
  TextCustom,
  // ThemeComponent,
} from '@components'
import {
  MenuBook as MenuBookIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from '@mui/icons-material'
import { useAppSelector, useAuthActions } from '@redux'
import { api } from '@config'
import { AuthStorage } from '@services'

export const ProfileMenu = () => {
  const { dispatchLogout } = useAuthActions()
  const { firstName, lastName } = useAppSelector(
    state => state.auth.personalInfo,
  )
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogout = (): string => {
    api.defaults.headers.Authorization = ''
    AuthStorage.removePersonalInfo()
    AuthStorage.removeTokens()
    dispatchLogout()
    return ''
  }

  return (
    <DropdownCustom
      open={showDropdown}
      setOpen={setShowDropdown}
      component={<ProfileComponent name={`${firstName} ${lastName}`} />}
      isToogleIcon
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <TextCustom
            text="Preferencias"
            className="text-white font-bold text-lg text-center"
          />
          {/* <Box className="flex items-center justify-center gap-4 px-4">
            <LanguagesComponent defaultTheme="dark" isLabel />
          </Box>
          <Box className="flex items-center justify-center gap-4 px-4">
            <ThemeComponent />
          </Box> */}
        </div>
        <div className="flex flex-col">
          <TextCustom
            text="Opciones"
            className="text-white font-bold text-lg text-center"
          />
          <DrawerItem
            text="Manual de Usuario"
            onClick={() => console.log('Redirigir al manual de usuario')}
            icon={<MenuBookIcon />}
          />
          <DrawerItem
            text="Cerrar Sesión"
            onClick={handleLogout}
            icon={<PowerSettingsNewIcon />}
          />
        </div>
      </div>
    </DropdownCustom>
  )
}
