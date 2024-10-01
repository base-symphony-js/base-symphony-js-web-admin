import { AlertCustom, TextCustom } from '@components'
import { COLORS } from '@common'

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  alert?: any
  showAlert?: boolean
  setShowAlert?: (value: boolean) => void
}

export const PageLayout = ({
  children,
  title = '',
  alert = {},
  showAlert = false,
  setShowAlert = () => null,
}: PageLayoutProps) => {
  const renderSeverity = () => {
    if (alert.statusCode >= 200 && alert.statusCode < 300) {
      return 'success'
    } else if (alert.statusCode >= 300 && alert.statusCode < 400) {
      return 'info'
    } else if (alert.statusCode >= 400 && alert.statusCode < 500) {
      return 'warning'
    } else if (alert.statusCode >= 500) {
      return 'error'
    } else {
      return 'info'
    }
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      <TextCustom text={title} className={`text-2xl font-bold text-general`} />
      <div
        className="p-8 flex flex-col rounded-lg"
        style={{ backgroundColor: COLORS.white }}
      >
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={renderSeverity()}
        />
        {children}
      </div>
    </div>
  )
}
