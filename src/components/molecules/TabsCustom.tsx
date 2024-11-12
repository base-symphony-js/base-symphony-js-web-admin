import { Box, Tab, Tabs } from '@mui/material'

interface TabsCustomProps {
  items: string[]
  value: number
  setValue: (value: number) => void
  disabled?: boolean
}

export const TabsCustom = ({
  items = [],
  value = 0,
  setValue = () => null,
  disabled = false,
}: TabsCustomProps) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {items.map((item, index) => (
          <Tab key={index} label={item} disabled={disabled} wrapped />
        ))}
      </Tabs>
    </Box>
  )
}
