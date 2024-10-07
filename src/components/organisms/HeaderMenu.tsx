import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import { TextCustom } from '@components'
import { APP_NAME, VERSION_NUMBER } from '@common'
import { MenuIcon } from '@assets'

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
      }}
    >
      <Toolbar sx={{ backgroundColor }}>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { xl: 'none' } }}
        >
          <MenuIcon theme="dark" />
        </IconButton>
        <div className="w-full flex justify-between font-poppins">
          <Box className="flex items-center gap-1">
            <TextCustom
              text={APP_NAME}
              className="text-lg font-semibold text-white"
            />
            <TextCustom
              text={`v${VERSION_NUMBER}`}
              className="text-white text-sm italic font-bold"
            />
          </Box>
          {children}
        </div>
      </Toolbar>
    </AppBar>
  )
}
