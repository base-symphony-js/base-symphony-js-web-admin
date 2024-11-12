import { memo } from 'react'
import {
  BaseTextFieldProps,
  IconButtonProps,
  InputAdornment,
  SvgIconProps,
  TextField,
} from '@mui/material'
import { IconButtonCustom, TitleInputCustom } from '@components'
import { TypeValidation, validTextInput } from '@common'

interface TextInputCustomProps {
  name?: string
  value?: string
  setValue: (value: string) => void
  onBlur?: () => void
  onEnter?: () => void
  placeholder?: string
  type?: BaseTextFieldProps['type']
  className?: string
  msgError?: string
  disabled?: boolean
  multiline?: boolean
  required?: boolean
  fontSize?: number
  validation?: TypeValidation
  maxLength?: number
  startIcon?: React.ReactElement<SvgIconProps>
  startIconMode?: 'adornment' | 'button'
  startIconAction?: () => void
  startIconColor?: IconButtonProps['color']
  endIcon?: React.ReactElement<SvgIconProps>
  endIconMode?: 'adornment' | 'button'
  endIconAction?: () => void
  endIconColor?: IconButtonProps['color']
  disableAutoComplete?: boolean
  autoComplete?: string
}

const Component = ({
  name = '',
  value = '',
  setValue = () => null,
  onEnter = () => null,
  onBlur = () => null,
  placeholder = '',
  type = 'text',
  className = '',
  msgError = '',
  disabled = false,
  multiline = false,
  required = false,
  validation = undefined,
  maxLength = undefined,
  startIcon = undefined,
  startIconMode = 'adornment',
  startIconAction = () => null,
  startIconColor = 'primary',
  endIcon = undefined,
  endIconMode = 'adornment',
  endIconAction = () => null,
  endIconColor = 'primary',
  disableAutoComplete = false,
  autoComplete = '',
}: TextInputCustomProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <TitleInputCustom name={name} required={required} />
      <TextField
        value={value}
        onChange={e => {
          const inputValue = e.target.value
          if (maxLength && inputValue.length > maxLength) return
          const isValid = validTextInput(inputValue, validation)
          if (isValid || inputValue === '' || !inputValue) setValue(inputValue)
        }}
        onBlur={() => {
          setValue(value.trim())
          onBlur()
        }}
        onKeyDown={e => {
          if (e.code === 'Enter' || e.code === 'NumpadEnter') onEnter()
        }}
        variant="outlined"
        size="small"
        multiline={multiline}
        minRows={multiline ? '3' : '1'}
        maxRows={multiline ? '4' : '1'}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        required={required}
        helperText={msgError}
        error={msgError ? true : false}
        autoComplete={autoComplete}
        slotProps={{
          input: {
            autoComplete: disableAutoComplete ? 'new-password' : '',
            startAdornment:
              startIcon &&
              (startIconMode === 'adornment' ? (
                <InputAdornment position="start">{startIcon}</InputAdornment>
              ) : (
                <IconButtonCustom
                  icon={startIcon}
                  onClick={startIconAction}
                  color={startIconColor}
                  size={24}
                />
              )),
            endAdornment:
              endIcon &&
              (endIconMode === 'adornment' ? (
                <InputAdornment position="end">{endIcon}</InputAdornment>
              ) : (
                <IconButtonCustom
                  icon={endIcon}
                  onClick={endIconAction}
                  color={endIconColor}
                  size={24}
                />
              )),
          },
        }}
      />
    </div>
  )
}

export const TextInputCustom = memo(Component)
