import { useLocation, useNavigate } from 'react-router-dom'
import { Collapse, List } from '@mui/material'
import { DrawerItem, TextCustom } from '@components'
import { APP_NAME, DEVELOPMENT_BY, VERSION_NUMBER } from '@common'
import { LogoCustomIcon } from '@assets'
import { ROUTES } from '@routes'
import { RenderPages } from './RenderPages'
import { useEffect, useState } from 'react'
import { usePreferences } from '@hooks'

export const SideMenu = ({
  onChange = () => null,
}: {
  onChange: () => void
}) => {
  const { t } = usePreferences()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { DASHBOARD } = ROUTES
  const [showModuleMenu, setShowModuleMenu] = useState(false)

  const handleItem = (path: string) => {
    navigate(path)
    onChange()
  }

  useEffect(() => {
    const isInPrivatePages = DASHBOARD.privatePages.some(page =>
      pathname.includes(page.path),
    )
    setShowModuleMenu(!isInPrivatePages)
  }, [pathname])

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center text-white my-2 mx-2">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleItem(DASHBOARD.path)}
        >
          <LogoCustomIcon theme="dark" className="w-16 h-16" />
          <TextCustom text={APP_NAME} className="text-white italic text-sm" />
        </div>
      </div>
      <div className="h-full flex flex-col gap-8 overflow-y-auto mt-2">
        <div className="flex flex-col gap-8">
          <List className="flex flex-col py-0">
            <TextCustom
              text={t.MENU}
              className="text-center text-white text-xs font-medium tracking-widest uppercase"
            />
            <DrawerItem
              text={t[DASHBOARD.id]}
              onClick={() => handleItem(DASHBOARD.path)}
              icon={DASHBOARD.icon}
              isSelected={pathname === DASHBOARD.path}
            />
            <RenderPages
              pages={DASHBOARD.publicPages}
              pathname={pathname}
              handleItem={handleItem}
              t={t}
            />
          </List>
          {showModuleMenu ? (
            <List className="flex flex-col py-0">
              <TextCustom
                text={t.MENU_MODULES}
                className="text-center text-white text-xs font-medium tracking-widest uppercase"
              />
              {DASHBOARD.privatePages.map(page => (
                <DrawerItem
                  key={page.id}
                  text={t[page.id]}
                  onClick={() => handleItem(page.path)}
                  icon={page.icon}
                  isSelected={pathname === page.path}
                />
              ))}
            </List>
          ) : (
            DASHBOARD.privatePages.map(page => (
              <Collapse
                key={page.id}
                in={pathname.includes(page.path)}
                timeout="auto"
                unmountOnExit
              >
                <List className="flex flex-col py-0">
                  <TextCustom
                    text={t[page.id]}
                    className="text-center text-white text-xs font-medium tracking-widest uppercase"
                  />
                  <RenderPages
                    pages={page.pages}
                    pathname={pathname}
                    handleItem={handleItem}
                    t={t}
                  />
                </List>
              </Collapse>
            ))
          )}
        </div>
      </div>
      <List className="flex flex-col py-2 items-center">
        <TextCustom
          text={`© 2024 ${DEVELOPMENT_BY}`}
          className="text-white text-xs font-bold text-center"
        />
        <TextCustom
          text={t.G_COPYRIGHT}
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
