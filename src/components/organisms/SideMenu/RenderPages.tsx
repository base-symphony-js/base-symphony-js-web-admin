import { DrawerItem } from '@components'
import { ITranslation } from '@languages'
import { Collapse } from '@mui/material'
import { IPagesRoute } from '@routes'
import { useState } from 'react'

interface RenderPagesProps {
  pages: IPagesRoute[]
  pathname: string
  handleItem: (path: string) => void
  t: ITranslation
}

export const RenderPages = ({
  pages,
  pathname,
  handleItem,
  t,
}: RenderPagesProps) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <>
      {pages.map(page => (
        <div key={page.id}>
          {page.pages.length === 0 ? (
            <DrawerItem
              text={t[page.id]}
              onClick={() => handleItem(page.path)}
              icon={page.icon}
              isSelected={pathname === page.path}
            />
          ) : (
            <div key={page.id}>
              <DrawerItem
                text={t[page.id]}
                onClick={() => setShowMore(!showMore)}
                icon={page.icon}
                isSelected={pathname === page.path}
                isCollapse
                collapse={showMore}
              />
              <Collapse in={showMore} timeout="auto" unmountOnExit>
                <div style={{ marginLeft: '16px' }}>
                  <RenderPages
                    pages={page.pages}
                    pathname={pathname}
                    handleItem={handleItem}
                    t={t}
                  />
                </div>
              </Collapse>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
