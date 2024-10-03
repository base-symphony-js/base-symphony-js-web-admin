import { memo } from 'react'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextCustom, TitleInputCustom } from '@components'

interface DatePickerCustomProps {
  name?: string
  placeholder?: string
  value: Date | null
  setValue: (value: Date | null) => void
  required?: boolean
  disabled?: boolean
  minDate?: Date | null
  maxDate?: Date | null
  msgError?: string | null
  className?: string
}

const Component = ({
  name = '',
  value = null,
  setValue = () => null,
  required = false,
  disabled = false,
  minDate = undefined,
  maxDate = undefined,
  msgError = null,
  className = '',
}: DatePickerCustomProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <TitleInputCustom name={name} required={required} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value ? dayjs(value) : null}
          onChange={e => setValue(e?.toDate() ?? null)}
          minDate={minDate ? dayjs(minDate) : undefined}
          maxDate={maxDate ? dayjs(maxDate) : undefined}
          disabled={disabled}
          slotProps={{
            textField: {
              size: 'small',
              sx: {
                '& .MuiInputBase-root': { fontFamily: 'Poppins' },
                '& .MuiInputLabel-root': { fontFamily: 'Poppins' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: msgError && 'red' },
                  '&:hover fieldset': { borderColor: msgError && 'red' },
                  '&.Mui-focused fieldset': { borderColor: msgError && 'red' },
                },
              },
            },
          }}
        />
      </LocalizationProvider>
      {msgError && (
        <TextCustom
          text={msgError}
          className="text-sm text-danger align-middle ml-1"
        />
      )}
    </div>
  )
}

export const DatePickerCustom = memo(Component)
