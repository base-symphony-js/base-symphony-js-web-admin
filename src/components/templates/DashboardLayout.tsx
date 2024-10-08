import { useRef, useState } from 'react'
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  useColorScheme,
} from '@mui/material'
import { HeaderMenu, SideMenu } from '@components'
import { COLORS, DRAWER_WIDTH } from '@common'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const containerRef = useRef<any>(null)
  const { colorScheme: theme } = useColorScheme()
  const backgroundColor = theme === 'dark' ? COLORS.general : COLORS.primary
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavigation = () => {
    setMobileOpen(false)
    containerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box className="flex h-screen overflow-hidden">
      <CssBaseline />
      <HeaderMenu
        drawerWidth={DRAWER_WIDTH}
        handleDrawerToggle={handleDrawerToggle}
        backgroundColor={backgroundColor}
      />
      <Box
        component="nav"
        sx={{ width: { xl: DRAWER_WIDTH }, flexShrink: { xl: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          variant="temporary"
          sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'block',
              lg: 'block',
              xl: 'none',
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              backgroundColor,
            },
          }}
        >
          <SideMenu onChange={handleNavigation} />
        </Drawer>
        <Drawer
          open
          variant="permanent"
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'none',
              xl: 'block',
            },
            '& .MuiDrawer-paper': {
              borderRight: 0,
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              backgroundColor,
            },
          }}
        >
          <SideMenu onChange={handleNavigation} />
        </Drawer>
      </Box>
      <Box
        component="main"
        className="flex flex-col h-full"
        sx={{ width: 'calc(100%)' }}
      >
        <Toolbar />
        <div
          ref={containerRef}
          className="flex flex-col h-full overflow-y-auto"
          style={{
            backgroundColor:
              theme === 'dark' ? COLORS['dark-optional'] : COLORS.optional,
          }}
        >
          {children}
        </div>
      </Box>
    </Box>
  )
}
