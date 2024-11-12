import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Collapse, List } from '@mui/material'
import { DrawerItem, GroupDrawerItem, TextCustom } from '@components'
import { DEVELOPMENT_BY, VERSION_NUMBER } from '@common'
import { LogoCustomIcon, ReplyIcon } from '@assets'
import { ROUTES } from '@routes'

export const SideMenu = ({
  onChange = () => null,
}: {
  onChange: () => void
}) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [showMainMenu, setShowMainMenu] = useState(false)
  const { DASHBOARD } = ROUTES

  useEffect(() => {
    if (
      pathname === DASHBOARD.path ||
      pathname === DASHBOARD.path + '/' ||
      pathname.includes(DASHBOARD.publicSections[0].path) ||
      pathname.includes(DASHBOARD.publicSections[1].path) ||
      pathname.includes(DASHBOARD.publicSections[2].path) ||
      pathname.includes(ROUTES.NOT_FOUND) ||
      pathname.includes(ROUTES.NOT_AUTHORIZED) ||
      pathname.includes(ROUTES.PROFILE)
    ) {
      setShowMainMenu(true)
    } else {
      setShowMainMenu(false)
    }
  }, [pathname])

  const handleItem = (path: string) => {
    navigate(path)
    onChange()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center text-white my-2 mx-2">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleItem(DASHBOARD.path)}
        >
          <LogoCustomIcon theme="dark" className="w-16 h-16" />
          <TextCustom
            text="Base Symphony JS"
            className="text-white italic text-sm"
          />
        </div>
      </div>
      <div className="h-full flex flex-col gap-8 overflow-y-auto mt-2">
        <Collapse in={showMainMenu} timeout="auto" unmountOnExit>
          <div className="flex flex-col gap-8">
            <List className="flex flex-col py-0">
              <TextCustom
                text="Menú principal"
                className="text-center text-white text-xs font-medium tracking-widest uppercase"
              />
              <DrawerItem
                text={DASHBOARD.name}
                onClick={() => handleItem(DASHBOARD.path)}
                icon={DASHBOARD.icon}
                isSelected={pathname === DASHBOARD.path}
              />
              {DASHBOARD.publicSections.map(Section =>
                Section.pages.length === 0 ? (
                  <DrawerItem
                    key={Section.id}
                    text={Section.name}
                    onClick={() => handleItem(Section.path)}
                    icon={Section.icon}
                    isSelected={pathname === Section.path}
                  />
                ) : (
                  <GroupDrawerItem
                    key={Section.id}
                    text={Section.name}
                    icon={Section.icon}
                  >
                    {Section.pages.map((Page: any) => (
                      <DrawerItem
                        key={Page.id}
                        text={Page.name}
                        onClick={() => handleItem(Page.path)}
                        icon={Page.icon}
                        isSelected={pathname === Page.path}
                        className="ml-4"
                      />
                    ))}
                  </GroupDrawerItem>
                ),
              )}
            </List>
            <List className="flex flex-col py-0">
              <TextCustom
                text="Módulos"
                className="text-center text-white text-xs font-medium tracking-widest uppercase"
              />
              {DASHBOARD.modules.map(Module => (
                <DrawerItem
                  key={Module.id}
                  text={Module.name}
                  onClick={() => handleItem(Module.path)}
                  icon={Module.icon}
                  isSelected={pathname === Module.path}
                />
              ))}
            </List>
          </div>
        </Collapse>
        {DASHBOARD.modules.map(Module => (
          <Collapse
            key={Module.id}
            in={pathname.includes(Module.path)}
            timeout="auto"
            unmountOnExit
          >
            <List className="flex flex-col py-0">
              <DrawerItem
                text={DASHBOARD.name}
                onClick={() => handleItem(DASHBOARD.path)}
                icon={<ReplyIcon className="text-white" />}
                isSelected={pathname === DASHBOARD.path}
              />
              <TextCustom
                text={Module.name}
                className="text-center text-white text-xs font-medium tracking-widest uppercase mt-8"
              />
              {Module.sections.map(Section =>
                Section.pages.length === 0 ? (
                  <DrawerItem
                    key={Section.id}
                    text={Section.name}
                    onClick={() => handleItem(Section.path)}
                    icon={Section.icon}
                    isSelected={pathname === Section.path}
                  />
                ) : (
                  <GroupDrawerItem
                    key={Section.id}
                    text={Section.name}
                    icon={Section.icon}
                  >
                    {Section.pages.map(Page => (
                      <DrawerItem
                        key={Page.id}
                        text={Page.name}
                        onClick={() => handleItem(Page.path)}
                        icon={Page.icon}
                        isSelected={pathname === Page.path}
                        className="ml-4"
                      />
                    ))}
                  </GroupDrawerItem>
                ),
              )}
            </List>
          </Collapse>
        ))}
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
