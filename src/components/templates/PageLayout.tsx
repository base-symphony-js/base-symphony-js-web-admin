import { AlertCustom, IAlert, TextCustom } from '@components'
import { COLORS } from '@common'
import { useColorScheme } from '@mui/material'

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  alert?: IAlert
  setAlert?: (value: IAlert) => void
}

export const PageLayout = ({
  children,
  title = '',
  alert,
  setAlert = () => null,
}: PageLayoutProps) => {
  const { colorScheme: theme } = useColorScheme()

  return (
    <div className="p-8 flex flex-col gap-4">
      <TextCustom text={title} className="text-2xl font-bold" />
      <div
        className="p-8 flex flex-col rounded-lg"
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
      </div>
    </div>
  )
}
