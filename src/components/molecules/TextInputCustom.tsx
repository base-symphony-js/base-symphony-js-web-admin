import { memo } from 'react'
import {
  BaseTextFieldProps,
  InputAdornment,
  SvgIconProps,
  TextField,
} from '@mui/material'
import { TextCustom, IconButtonCustom } from '@components'
import { validTextInput, validInputInitialNumbers } from '@core'
import { CheckCircleOutlineIcon, ErrorOutlineIcon } from '@assets'
import { COLORS, ICOLORS } from '@common'

type TypeInputIconMode = 'adornment' | 'button'

type TypeValidation =
  | 'onlyNumber'
  | 'onlyLetters'
  | 'onlyLettersExtend'
  | 'onlyAlphanumeric'
  | 'onlyAlphanumericExtend'
  | 'validateEmail'
  | 'validateEmailDomain'

interface TextInputCustomProps {
  name?: string
  value?: string
  setValue: (value: string) => void
  onBlur?: () => void
  onEnter?: () => void
  size?: BaseTextFieldProps['size']
  placeholder?: string
  type?: BaseTextFieldProps['type']
  typesValidation?: TypeValidation
  validInitNumbers?: number[]
  maxLength?: number
  className?: string
  iconStart?: React.ReactElement<SvgIconProps> | null
  iconEnd?: React.ReactElement<SvgIconProps> | null
  iconMode?: TypeInputIconMode
  iconTypeColor?: ICOLORS
  iconOnClick?: () => void
  msgError?: string | null
  disabled?: boolean
  multiline?: boolean
  required?: boolean
  fontSize?: number
}

const Component = ({
  name = '',
  value = '',
  setValue = () => null,
  onEnter = () => null,
  onBlur = () => null,
  size = 'small',
  placeholder = '',
  type = 'text',
  typesValidation = undefined,
  validInitNumbers = [],
  maxLength = undefined,
  className = '',
  iconStart = null,
  iconMode = 'adornment',
  iconTypeColor = 'primary',
  iconOnClick = () => null,
  msgError = null,
  disabled = false,
  multiline = false,
  required = false,
  fontSize = 18,
}: TextInputCustomProps) => {
  const handleOnChange = (e: any) => {
    const inputValue = e.target.value
    let isValid = true
    if (validInitNumbers.length) {
      isValid = validInputInitialNumbers(inputValue, validInitNumbers)
    } else {
      isValid = validTextInput(inputValue, typesValidation)
    }
    if (isValid || inputValue === '' || !inputValue) {
      setValue(inputValue)
    }
  }

  const renderIcon = (icon: any) => {
    if (icon) {
      return iconMode === 'button' ? (
        <IconButtonCustom
          icon={icon}
          onClick={iconOnClick}
          typeColor={iconTypeColor}
        />
      ) : (
        <InputAdornment position="start">{icon}</InputAdornment>
      )
    } else {
      return null
    }
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
      <TextField
        value={value}
        onChange={handleOnChange}
        onBlur={() => {
          setValue(typeof value === 'string' ? value.trim() : value)
          onBlur()
        }}
        onKeyDown={e => {
          if (e.code === 'Enter' || e.code === 'NumpadEnter') onEnter()
        }}
        variant="outlined"
        size={size}
        multiline={multiline}
        minRows={multiline ? '3' : '1'}
        maxRows={multiline ? '4' : '1'}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        required={required}
        inputProps={{
          maxLength,
          style: { textAlign: 'left' },
        }}
        InputProps={{
          startAdornment: renderIcon(iconStart),
          endAdornment:
            typeof msgError !== 'string' ? null : msgError.length === 0 ? (
              <InputAdornment position="start">
                <CheckCircleOutlineIcon className="text-success" />
              </InputAdornment>
            ) : (
              <InputAdornment position="start">
                <ErrorOutlineIcon className="text-danger" />
              </InputAdornment>
            ),
        }}
        sx={{
          '& legend': {
            marginLeft: 2,
            fontSize: fontSize * 0.82,
            display: 'none',
          },
          '& .MuiInputBase-root': {
            color: COLORS.black,
            '& fieldset': {
              // Por defecto
              top: 0,
              borderRadius: 2,
              border: typeof msgError === 'string' ? 2 : 1,
              borderColor: renderBorderColor(),
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
          '& .MuiInputLabel-asterisk': { color: COLORS.danger },
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
          borderRadius: 2,
          marginTop: 0,
        }}
      />
      {msgError && (
        <TextCustom
          text={msgError}
          className="text-sm text-danger align-middle ml-1"
        />
      )}
    </div>
  )
}

export const TextInputCustom = memo(Component)
