import { Collapse, List } from '@mui/material'
import { TextCustom } from '@components'
import { DEVELOPMENT_BY, VERSION_NUMBER } from '@common'
import { LogoCustomIcon } from '@assets'
import { MainMenu } from './MainMenu'
import { SecurityMenu } from './SecurityMenu'
import { DevelopmentMenu } from './DevelopmentMenu'
import { useLocation } from 'react-router-dom'
import { InformationMenu } from './InformationMenu'
import { useEffect, useState } from 'react'
import { IModules } from '@interfaces'

type ModuleSelected = IModules | 'examples' | null

export const SideMenu = ({
  onChange = () => null,
}: {
  onChange: () => void
}) => {
  const { pathname } = useLocation()
  const [moduleSelected, setModuleSelected] = useState<ModuleSelected>(null)

  useEffect(() => {
    let selection: ModuleSelected = null
    if (pathname.includes('/dashboard/security')) selection = 'security'
    if (pathname.includes('/dashboard/examples')) selection = 'examples'
    setModuleSelected(selection)
  }, [pathname])

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center text-white my-2 mx-2">
        <LogoCustomIcon className="w-16 h-16" />
      </div>
      <div className="h-full flex flex-col gap-8 overflow-y-auto mt-2">
        {!moduleSelected && <MainMenu onChange={onChange} />}
        <Collapse
          in={moduleSelected === 'security'}
          timeout="auto"
          unmountOnExit
        >
          <SecurityMenu onChange={onChange} />
        </Collapse>
        <Collapse
          in={moduleSelected === 'examples'}
          timeout="auto"
          unmountOnExit
        >
          <DevelopmentMenu onChange={onChange} />
        </Collapse>
        <InformationMenu onChange={onChange} />
      </div>
      <List className="flex flex-col py-2 items-center">
        <TextCustom
          text={`© 2024 ${DEVELOPMENT_BY}`}
          className="text-white text-xs font-bold text-center"
        />
        <TextCustom
          text="All rights reserved"
          className="text-white text-xs font-bold text-center"
        />
        <TextCustom
          text={`v${VERSION_NUMBER}`}
          className="text-white text-xs italic font-bold"
        />
      </List>
    </div>
  )
}
