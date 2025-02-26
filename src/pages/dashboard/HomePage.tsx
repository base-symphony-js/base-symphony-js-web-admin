import { useState } from 'react'
import {
  BusinessIcon,
  CategoryIcon,
  CodeIcon,
  DescriptionIcon,
  GroupsIcon,
  SecurityIcon,
} from '@assets'
import { CardMenu, IAlert, PageLayout, TextCustom } from '@components'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const [alert, setAlert] = useState({} as IAlert)
  const navigate = useNavigate()

  return (
    <PageLayout title="Inicio" alert={alert} setAlert={setAlert}>
      <TextCustom
        text="Selecciona el módulo al cual desea acceder."
        color="textSecondary"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4 justify-items-center">
        <CardMenu
          title="Módulo de seguridad"
          icon={<SecurityIcon className="mb-2 w-24 h-24 text-info" />}
          onClick={() => navigate('/dashboard/security')}
        />
        <CardMenu
          title="Módulo de negocio"
          icon={<BusinessIcon className="mb-2 w-24 h-24 text-success" />}
          onClick={() =>
            setAlert({
              open: true,
              title: 'Información',
              description: 'Actualmente no está integrado este módulo',
              severity: 'info',
            })
          }
        />
        <CardMenu
          title="Módulo de productos"
          icon={<CategoryIcon className="mb-2 w-24 h-24 text-warning" />}
          onClick={() =>
            setAlert({
              open: true,
              title: 'Información',
              description: 'Actualmente no está integrado este módulo',
              severity: 'info',
            })
          }
        />
        <CardMenu
          title="Módulo de facturación"
          icon={<DescriptionIcon className="mb-2 w-24 h-24 text-error" />}
          onClick={() =>
            setAlert({
              open: true,
              title: 'Información',
              description: 'Actualmente no está integrado este módulo',
              severity: 'info',
            })
          }
        />
        <CardMenu
          title="Módulo de RRHH"
          icon={<GroupsIcon className="mb-2 w-24 h-24 text-secondary" />}
          onClick={() =>
            setAlert({
              open: true,
              title: 'Información',
              description: 'Actualmente no está integrado este módulo',
              severity: 'info',
            })
          }
        />
        <CardMenu
          title="Módulo de Desarrollo"
          icon={<CodeIcon className="mb-2 w-24 h-24" />}
          onClick={() => navigate('/dashboard/development')}
        />
      </div>
    </PageLayout>
  )
}
