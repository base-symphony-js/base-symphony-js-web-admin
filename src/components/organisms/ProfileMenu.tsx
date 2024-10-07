import { useState } from 'react'
import { Box } from '@mui/material'
import {
  DrawerItem,
  DropdownCustom,
  LanguagesComponent,
  TextCustom,
  ThemeComponent,
} from '@components'
import { useAppSelector, useAuthActions } from '@redux'
import { api } from '@config'
import { AuthStorage } from '@services'
import { UserProfileIcon, PowerSettingsNewIcon, MenuBookIcon } from '@assets'

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
      component={
        <div className="flex items-center gap-4">
          <span className="text-white text-sm w-36 font-semibold text-end">
            {`${firstName} ${lastName}`}
          </span>
          <UserProfileIcon className="w-10 h-10" />
        </div>
      }
      isToogleIcon
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <TextCustom
            text="Preferencias"
            className="text-white font-bold text-lg text-center"
          />
          <Box className="flex items-center justify-center gap-4 px-4">
            <LanguagesComponent />
          </Box>
          <Box className="flex items-center justify-center gap-4 px-4">
            <ThemeComponent />
          </Box>
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
