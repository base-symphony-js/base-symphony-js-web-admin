import { AlertCustom, IAlert, LoaderCustom, TextCustom } from '@components'
import { COLORS } from '@common'
import { Box, CssBaseline, useColorScheme } from '@mui/material'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  alert?: IAlert
  setAlert?: (value: IAlert) => void
  loader?: boolean
}

export const PageLayout = ({
  children,
  title = '',
  alert,
  setAlert = () => null,
  loader = false,
}: PageLayoutProps) => {
  const { colorScheme: theme } = useColorScheme()

  return (
    <Box className="p-8 flex flex-col gap-4">
      <CssBaseline />
      <TextCustom text={title} className="text-2xl font-bold" />
      <div
        className="p-8 flex flex-col rounded-lg shadow-lg"
        style={{
          backgroundColor: theme === 'dark' ? COLORS.dark : COLORS.white,
        }}
      >
        <AlertCustom
          title={alert?.title}
          description={alert?.description}
          open={alert?.open}
          severity={alert?.severity}
          setAlert={setAlert}
        />
        {children}
        {loader && <LoaderCustom mode="screen" />}
      </div>
    </Box>
  )
}
