import { useState } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'
import { APP_NAME } from '@common'
import {
  IconButtonCustom,
  DrawerItem,
  DropdownCustom,
  LanguagesComponent,
  TextCustom,
  ThemeComponent,
} from '@components'
import { useAppSelector, useAuthActions } from '@redux'
import { api } from '@config'
import {
  ProfileCustomIcon,
  PowerSettingsNewIcon,
  MenuBookIcon,
  MenuIcon,
} from '@assets'

interface HeaderMenuProps {
  drawerWidth: number
  handleDrawerToggle: () => void
  backgroundColor: string
}

export const HeaderMenu = ({
  drawerWidth = 0,
  handleDrawerToggle = () => null,
  backgroundColor = '',
}: HeaderMenuProps) => {
  const { dispatchLogout } = useAuthActions()
  const { firstName, lastName } = useAppSelector(
    state => state.auth.personalInfo,
  )
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogout = (): string => {
    api.defaults.headers.Authorization = ''
    dispatchLogout()
    return ''
  }

  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        width: { xl: `calc(100% - ${drawerWidth}px)` },
        ml: { xl: `${drawerWidth}px` },
      }}
    >
      <Toolbar className="px-2" sx={{ backgroundColor }}>
        <IconButtonCustom
          icon={<MenuIcon theme="dark" />}
          onClick={handleDrawerToggle}
          className="flex xl:hidden"
        />
        <Box className="w-full flex justify-between">
          <Box className="flex items-center gap-1">
            <TextCustom
              text={APP_NAME}
              className="text-lg font-semibold text-white"
            />
          </Box>
          <DropdownCustom
            open={showDropdown}
            setOpen={setShowDropdown}
            component={
              <div className="flex items-center gap-4">
                <span className="text-white text-sm w-36 font-semibold text-end">
                  {`${firstName} ${lastName}`}
                </span>
                <ProfileCustomIcon className="w-10 h-10" />
              </div>
            }
            isToogleIcon
            backgroundColor={backgroundColor}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <TextCustom
                  text="Preferencias"
                  className="text-white font-bold text-lg text-center"
                />
                <LanguagesComponent />
                <ThemeComponent />
              </div>
              <div className="flex flex-col">
                <TextCustom
                  text="Opciones"
                  className="text-white font-bold text-lg text-center"
                />
                <DrawerItem
                  text="Manual de Usuario"
                  onClick={() => console.log('Redirigir al manual de usuario')}
                  icon={<MenuBookIcon theme="dark" />}
                />
                <DrawerItem
                  text="Cerrar Sesión"
                  onClick={handleLogout}
                  icon={<PowerSettingsNewIcon theme="dark" />}
                />
              </div>
            </div>
          </DropdownCustom>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
