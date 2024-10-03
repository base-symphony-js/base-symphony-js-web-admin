import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { TextCustom } from '@components'
import { APP_NAME } from '@common'

interface HeaderMenuProps {
  children: React.ReactNode
  drawerWidth: number
  handleDrawerToggle: () => void
  backgroundColor: string
}

export const HeaderMenu = ({
  children,
  drawerWidth = 0,
  handleDrawerToggle = () => null,
  backgroundColor = '',
}: HeaderMenuProps) => {
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        width: { xl: `calc(100% - ${drawerWidth}px)` },
        ml: { xl: `${drawerWidth}px` },
        backgroundColor,
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { xl: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <div className="w-full flex justify-between font-poppins">
          <Box className="flex items-center gap-3">
            <TextCustom
              text={APP_NAME}
              className="hidden md:block text-lg font-semibold text-white"
            />
            <TextCustom
              text={APP_NAME}
              className="block md:hidden text-lg font-semibold text-white"
            />
          </Box>
          {children}
        </div>
      </Toolbar>
    </AppBar>
  )
}
