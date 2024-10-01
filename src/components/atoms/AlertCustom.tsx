import { useState } from 'react'
import { Alert, AlertProps, AlertTitle, Collapse } from '@mui/material'
import { IconButtonCustom, TextCustom } from '@components'
import { COLORS } from '@common'
import { Close as CloseIcon } from '@mui/icons-material'

interface AlertCustomProps {
  description?: string
  open: boolean
  setOpen: (value: boolean) => void
  severity: AlertProps['severity']
  title: string
}

export const AlertCustom = ({
  description = '',
  open = false,
  setOpen = () => null,
  severity = 'info',
  title = '',
}: AlertCustomProps) => {
  const [showMore, setShowMore] = useState(true)

  const renderTypeColor = () => {
    switch (severity) {
      case 'success':
        return 'success'
      case 'warning':
        return 'warning'
      case 'error':
        return 'danger'
      case 'info':
      default:
        return 'primary'
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        action={
          <IconButtonCustom
            icon={<CloseIcon fontSize="inherit" />}
            typeColor={renderTypeColor()}
            size={24}
            onClick={handleClose}
          />
        }
        className={`flex items-center py-0 rounded-xl bg-${renderTypeColor()} bg-opacity-30 whitespace-pre-line`}
      >
        <AlertTitle
          onClick={handleShowMore}
          className="text-lg cursor-pointer"
          sx={{ '&.MuiTypography-root': { margin: 0 } }}
          style={{
            fontFamily: 'Poppins',
            color: COLORS.white,
          }}
        >
          {title}
        </AlertTitle>
        <Collapse in={showMore}>{<TextCustom text={description} />}</Collapse>
      </Alert>
    </Collapse>
  )
}
