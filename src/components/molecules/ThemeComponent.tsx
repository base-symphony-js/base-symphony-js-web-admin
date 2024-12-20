import { TextCustom } from '@components'
import { usePreferences } from '@hooks'
import { COLORS } from '@common'
import { useColorScheme, Switch } from '@mui/material'

export const ThemeComponent = () => {
  const { t } = usePreferences()
  const { colorScheme: theme, setMode } = useColorScheme()

  const handleChange = () => {
    if (theme !== 'dark') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 px-4">
      <TextCustom
        text={t.G_LIGHT}
        className="w-20 font-medium text-white text-end"
      />
      <Switch
        checked={theme === 'dark'}
        onChange={handleChange}
        sx={{
          m: 1,
          '&.MuiSwitch-root': {
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: COLORS['dark-gray'],
            borderRadius: 20 / 2,
          },
          '& .MuiSwitch-switchBase': {
            margin: 0,
            padding: 0,
            transform: 'translateX(8px) translateY(8px)',
            '&.Mui-checked': {
              color: '#fff',
              transform: 'translateX(32px) translateY(8px)',
              '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                  '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
              },
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: COLORS.primary,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: theme === 'dark' ? COLORS.primary : COLORS.warning,
            '&::before': {
              content: "''",
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
          },
        }}
      />
      <TextCustom text={t.G_DARK} className="w-20 font-medium text-white" />
    </div>
  )
}
