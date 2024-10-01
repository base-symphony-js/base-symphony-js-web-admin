import { memo } from 'react'
import { Select, SelectProps } from '@mui/material'
import { MenuItemCustom, TextCustom } from '@components'
import { COLORS } from '@common'

type SelectOptions = {
  id: string
  label: string
}

interface SelectCustomProps {
  name?: string
  placeholder?: string
  options: SelectOptions[]
  value: string
  setValue: (value: string) => void
  onBlur: () => void
  size?: SelectProps['size']
  msgError?: string | null
  disabled?: boolean
  required?: boolean
  fontSize?: number
  className?: string
}

const Component = ({
  name = '',
  placeholder = '',
  options = [],
  value = '',
  setValue = () => null,
  onBlur = () => null,
  size = 'small',
  msgError = null,
  disabled = false,
  required = false,
  fontSize = 18,
  className = '',
}: SelectCustomProps) => {
  const handleChange = (e: any) => {
    const inputValue = e.target.value
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

  const renderBackgroundColor = () => {
    if (disabled) {
      return COLORS.optional
    } else if (value) {
      return COLORS.general
    } else {
      return COLORS.white
    }
  }

  const renderIconColor = () => {
    if (disabled) {
      return COLORS['dark-gray']
    } else if (value) {
      return COLORS.white
    } else {
      return COLORS['dark-gray']
    }
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
      <Select
        labelId="demo-simple-select-label"
        value={value}
        displayEmpty
        onChange={handleChange}
        onBlur={onBlur}
        className="w-full"
        size={size}
        disabled={disabled}
        renderValue={selected => {
          if (selected.length === 0) {
            return (
              <em
                className="text-light-gray not-italic"
                style={{ fontFamily: 'Poppins' }}
              >
                {placeholder}
              </em>
            )
          }
          if (options.length > 0) {
            return options.find(item => item.id === selected)?.label
          }
          return selected
        }}
        sx={{
          '& MuiPaper-root': { marginTop: 1 },
          '& legend': {
            marginLeft: 2,
            fontSize: fontSize * 0.82,
            display: 'none',
          },
          '& fieldset': {
            top: 0,
            borderRadius: 2,
            border: typeof msgError === 'string' ? 2 : 1,
            borderColor: renderBorderColor(),
            color: COLORS.black,
          },
          '&.MuiOutlinedInput-root': {
            '&:hover fieldset': {
              // Evento hover
              borderColor: renderBorderColor(true),
              boxShadow: !disabled
                ? `0px 0px 8px ${renderBorderColor(true)}`
                : null,
            },
            '&.Mui-focused fieldset': {
              border: typeof msgError === 'string' ? 2 : 1,
              borderColor: renderBorderColor(true),
            },
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS['dark-gray'],
            color: COLORS.black,
          },
          borderRadius: 2,
          color: value ? COLORS.white : undefined,
          backgroundColor: renderBackgroundColor(),
          '.MuiSvgIcon-root ': {
            fill: renderIconColor(),
          },
        }}
      >
        <MenuItemCustom disabled value="">
          <em
            className={value ? 'text-black' : 'text-white'}
            style={{ fontFamily: 'Poppins' }}
          >
            {placeholder}
          </em>
        </MenuItemCustom>
        {options.map(option => (
          <MenuItemCustom key={option?.id} value={option?.id}>
            {option?.label}
          </MenuItemCustom>
        ))}
      </Select>
      {msgError && (
        <TextCustom
          text={msgError}
          className="text-sm text-danger align-middle ml-1"
        />
      )}
    </div>
  )
}

export const SelectCustom = memo(Component)
