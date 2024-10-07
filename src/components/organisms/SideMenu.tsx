import { useLocation, useNavigate } from 'react-router-dom'
import { Collapse, List } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { PATH } from '@routes'
import { useState } from 'react'
import {
  ExtensionIcon,
  GroupsIcon,
  HomeCustomIcon,
  ScienceIcon,
  SecurityIcon,
  VerifiedUserIcon,
} from '@assets'
import { DEVELOPMENT_BY } from '@common'

interface SideMenuProps {
  onChange: () => void
}

export const SideMenu = ({ onChange = () => null }: SideMenuProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [showExamples, setShowExamples] = useState(false)
  const [showSeguridad, setShowSeguridad] = useState(false)

  const handleItem = (path = '') => {
    navigate(path)
    onChange()
  }

  return (
    <div className="flex flex-col h-full">
      {/* <div className="flex justify-start items-start pb-4 text-white h-16">
        <img src={EternaLogoImage} alt="Logo DJOET" className="ml-4 w-52" />
      </div> */}
      <div className="h-full flex flex-col justify-between gap-12 overflow-y-auto">
        <List className="flex flex-col py-0">
          <DrawerItem
            text="Inicio"
            onClick={() => handleItem(PATH.HOME)}
            icon={<HomeCustomIcon theme="dark" />}
            isSelected={pathname === PATH.HOME}
          />
          <div>
            <DrawerItem
              text="Seguridad"
              onClick={() => setShowSeguridad(!showSeguridad)}
              icon={<SecurityIcon theme="dark" />}
              isCollapse
              collapse={showSeguridad}
            />
            <Collapse in={showSeguridad} timeout="auto" unmountOnExit>
              <DrawerItem
                text="Usuarios"
                onClick={() => handleItem(PATH.SEGURIDAD_USUARIOS)}
                icon={<GroupsIcon theme="dark" />}
                isSelected={pathname === PATH.SEGURIDAD_USUARIOS}
                className="ml-4"
              />
              <DrawerItem
                text="Grupos"
                onClick={() => handleItem(PATH.SEGURIDAD_GRUPOS)}
                icon={<VerifiedUserIcon theme="dark" />}
                isSelected={pathname === PATH.SEGURIDAD_GRUPOS}
                className="ml-4"
              />
            </Collapse>
          </div>
          <div>
            <DrawerItem
              text="Ejemplos"
              onClick={() => setShowExamples(!showExamples)}
              icon={<ScienceIcon theme="dark" />}
              isCollapse
              collapse={showExamples}
            />
            <Collapse in={showExamples} timeout="auto" unmountOnExit>
              <DrawerItem
                text="Textos y Colores"
                onClick={() => handleItem(PATH.EXAMPLE_TEXT_AND_COLORS)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_TEXT_AND_COLORS}
                className="ml-4"
              />
              <DrawerItem
                text="Botones y IconButtons"
                onClick={() => handleItem(PATH.EXAMPLE_BUTTONS)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_BUTTONS}
                className="ml-4"
              />
              <DrawerItem
                text="TextInputs"
                onClick={() => handleItem(PATH.EXAMPLE_INPUTS_1)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_INPUTS_1}
                className="ml-4"
              />
              <DrawerItem
                text="Validaciones de TextInputs"
                onClick={() => handleItem(PATH.EXAMPLE_INPUTS_2)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_INPUTS_2}
                className="ml-4"
              />
              <DrawerItem
                text="Selects y DatePickers"
                onClick={() => handleItem(PATH.EXAMPLE_INPUTS_3)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_INPUTS_3}
                className="ml-4"
              />
              <DrawerItem
                text="Chexboxs, RadioButtons y Swtichs"
                onClick={() => handleItem(PATH.EXAMPLE_INPUTS_4)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_INPUTS_4}
                className="ml-4"
              />
              <DrawerItem
                text="Alerts"
                onClick={() => handleItem(PATH.EXAMPLE_ALERTS)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_ALERTS}
                className="ml-4"
              />
              <DrawerItem
                text="Alerts Modal"
                onClick={() => handleItem(PATH.EXAMPLE_ALERTS_MODAL)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_ALERTS_MODAL}
                className="ml-4"
              />
              <DrawerItem
                text="Loaders"
                onClick={() => handleItem(PATH.EXAMPLE_LOADERS)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_LOADERS}
                className="ml-4"
              />
              <DrawerItem
                text="Ventanas Modales"
                onClick={() => handleItem(PATH.EXAMPLE_MODAL_WINDOWS)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_MODAL_WINDOWS}
                className="ml-4"
              />
              <DrawerItem
                text="Tablas"
                onClick={() => handleItem(PATH.EXAMPLE_TABLES)}
                icon={<ExtensionIcon theme="dark" />}
                isSelected={pathname === PATH.EXAMPLE_TABLES}
                className="ml-4"
              />
            </Collapse>
          </div>
        </List>
      </div>
      <List className="flex flex-col gap-1 py-2 items-center">
        <TextCustom
          text={`© 2024 ${DEVELOPMENT_BY}`}
          className="text-white text-sm font-bold text-center"
        />
        <TextCustom
          text="All rights reserved"
          className="text-white text-sm font-bold text-center"
        />
      </List>
    </div>
  )
}
