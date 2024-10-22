import { Collapse, List } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { ExtensionIcon } from '@assets'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '@routes'
import ReplyIcon from '@mui/icons-material/Reply'
import { useState } from 'react'

export const DevelopmentMenu = ({
  onChange = () => null,
}: {
  onChange: () => void
}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [showInputs, setShowInputs] = useState(false)
  const { DASHBOARD } = ROUTES
  const { EXAMPLES } = DASHBOARD

  const handleItem = (path: string) => {
    navigate(path)
    onChange()
  }

  return (
    <List className="flex flex-col py-0">
      {/* Main route */}
      <DrawerItem
        text="Regresar a Inicio"
        onClick={() => handleItem(DASHBOARD.path)}
        icon={<ReplyIcon className="text-white" />}
        isSelected={pathname === DASHBOARD.path}
      />
      <TextCustom
        text="MÓDULO DE DESARROLLO"
        className="text-center text-white text-xs font-medium tracking-widest mt-8"
      />
      <DrawerItem
        text="Textos y Colores"
        onClick={() => handleItem(EXAMPLES.TEXT_AND_COLORS.path)}
        icon={<ExtensionIcon theme="dark" />}
        isSelected={pathname === EXAMPLES.TEXT_AND_COLORS.path}
      />
      <DrawerItem
        text="Botones"
        onClick={() => handleItem(EXAMPLES.BUTTONS.path)}
        icon={<ExtensionIcon theme="dark" />}
        isSelected={pathname === EXAMPLES.BUTTONS.path}
      />
      <DrawerItem
        text="Inputs"
        onClick={() => setShowInputs(!showInputs)}
        icon={<ExtensionIcon theme="dark" />}
        isCollapse
      />
      <Collapse in={showInputs} timeout="auto" unmountOnExit>
        <DrawerItem
          text="Cajas de texto"
          onClick={() => handleItem(EXAMPLES.INPUTS_1.path)}
          icon={<ExtensionIcon theme="dark" />}
          isSelected={pathname === EXAMPLES.INPUTS_1.path}
          className="ml-4"
        />
        <DrawerItem
          text="Cajas de texto con validación"
          onClick={() => handleItem(EXAMPLES.INPUTS_2.path)}
          icon={<ExtensionIcon theme="dark" />}
          isSelected={pathname === EXAMPLES.INPUTS_2.path}
          className="ml-4"
        />
        <DrawerItem
          text="Selects y datepickers"
          onClick={() => handleItem(EXAMPLES.INPUTS_3.path)}
          icon={<ExtensionIcon theme="dark" />}
          isSelected={pathname === EXAMPLES.INPUTS_3.path}
          className="ml-4"
        />
        <DrawerItem
          text="Checkboxs, radio botones y switchs"
          onClick={() => handleItem(EXAMPLES.INPUTS_4.path)}
          icon={<ExtensionIcon theme="dark" />}
          isSelected={pathname === EXAMPLES.INPUTS_4.path}
          className="ml-4"
        />
      </Collapse>
      <DrawerItem
        text="Alertas"
        onClick={() => handleItem(EXAMPLES.ALERTS.path)}
        icon={<ExtensionIcon theme="dark" />}
        isSelected={pathname === EXAMPLES.ALERTS.path}
      />
      <DrawerItem
        text="Animaciones"
        onClick={() => handleItem(EXAMPLES.LOADERS.path)}
        icon={<ExtensionIcon theme="dark" />}
        isSelected={pathname === EXAMPLES.LOADERS.path}
      />
      <DrawerItem
        text="Ventanas Modales"
        onClick={() => handleItem(EXAMPLES.MODAL_WINDOWS.path)}
        icon={<ExtensionIcon theme="dark" />}
        isSelected={pathname === EXAMPLES.MODAL_WINDOWS.path}
      />
      <DrawerItem
        text="Tablas"
        onClick={() => handleItem(EXAMPLES.TABLES.path)}
        icon={<ExtensionIcon theme="dark" />}
        isSelected={pathname === EXAMPLES.TABLES.path}
      />
    </List>
  )
}
