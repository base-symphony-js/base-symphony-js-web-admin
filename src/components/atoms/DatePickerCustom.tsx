import { memo } from 'react'
import { BaseTextFieldProps, TextField } from '@mui/material/'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextCustom } from '@components'
import { COLORS } from '@common'

interface DatePickerCustomProps {
  name?: string
  placeholder?: string
  value: Date | null
  setValue: (value: Date | null) => void
  size?: BaseTextFieldProps['size']
  required?: boolean
  disabled?: boolean
  minDate?: Date | undefined
  maxDate?: Date | undefined
  msgError?: string | null
  className?: string
  fontSize?: number
}

const Component = ({
  name = '',
  value = null,
  setValue = () => null,
  size = 'small',
  required = false,
  disabled = false,
  minDate = undefined,
  maxDate = undefined,
  msgError = null,
  className = '',
  fontSize = 18,
}: DatePickerCustomProps) => {
  const handleChange = (inputValue: any) => {
    setValue(inputValue)
  }

  const renderBorderColor = (isHover = false) => {
    let result = ''
    if (!disabled) {
      if (typeof msgError !== 'string') {
        result = isHover ? COLORS.primary : COLORS['dark-gray']
      } else {
        result = msgError.length === 0 ? COLORS.success : COLORS.danger
      }
    }
    return result
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {name && (
        <div className="flex justify-between items-end">
          <div className="flex">
            <TextCustom text={name} className="text-sm sm:text-lg" />
            {required && (
              <TextCustom text="*" className="ml-1 text-danger font-bold" />
            )}
          </div>
        </div>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={handleChange}
          minDate={minDate}
          maxDate={maxDate}
          renderInput={params => (
            <TextField
              size={size}
              required={required}
              sx={{
                '& legend': {
                  marginLeft: 2,
                  fontSize: fontSize * 0.82,
                  display: 'none',
                },
                '& .MuiInputBase-root': {
                  color: value ? COLORS.primary : COLORS.black,
                  '& fieldset': {
                    top: 0,
                    borderRadius: 2,
                    border: typeof msgError === 'string' ? 2 : 1,
                    borderColor: renderBorderColor(),
                    color: COLORS.black,
                  },
                  '&:hover fieldset': {
                    // Evento hover
                    borderColor: renderBorderColor(true),
                    boxShadow: !disabled
                      ? `0px 0px 8px ${renderBorderColor(true)}`
                      : null,
                  },
                  '&.Mui-focused fieldset': {
                    // Evento focus
                    borderColor: 'transparent',
                    boxShadow: !disabled
                      ? `0px 0px 8px ${renderBorderColor(true)}`
                      : null,
                    color: COLORS.black,
                    fontSize,
                  },
                  fontFamily: 'Poppins',
                },
                '& .MuiInputLabel-root': { fontFamily: 'Poppins' },
                '& .MuiInputLabel-asterisk': { display: 'none' },
                '& .MuiInputLabel-shrink': {
                  marginLeft: 2,
                  color: COLORS.black,
                  fontSize,
                  fontWeight: '600',
                  '& .MuiInputLabel-asterisk': {
                    color: COLORS.danger,
                    display: 'inline',
                  },
                },
                backgroundColor: COLORS.white,
                borderRadius: 1,
                marginTop: 0,
              }}
            />
          )}
          disabled={disabled}
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
