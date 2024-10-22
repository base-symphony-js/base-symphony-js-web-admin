import { useState } from 'react'
import { CardMenu, IAlert, PageLayout, TextCustom } from '@components'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@routes'
import GroupsIcon from '@mui/icons-material/Groups'
import { VerifiedUserIcon } from '@assets'

export const SecurityPage = () => {
  const [alert, setAlert] = useState<IAlert>({} as IAlert)
  const navigate = useNavigate()

  return (
    <PageLayout title="Módulo de seguridad" alert={alert} setAlert={setAlert}>
      <TextCustom
        text="Selecciona la sección a la cual desea acceder."
        color="textSecondary"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4 justify-items-center">
        <CardMenu
          title="Gestión de usuarios"
          icon={<GroupsIcon className="mb-2 w-24 h-24 text-info" />}
          onClick={() => navigate(ROUTES.DASHBOARD.SECURITY.USERS.path)}
        />
        <CardMenu
          title="Gestión de roles"
          icon={<VerifiedUserIcon className="mb-2 w-24 h-24 text-success" />}
          onClick={() => navigate(ROUTES.DASHBOARD.SECURITY.ROLES.path)}
        />
        <CardMenu
          title="Gestión de permisos"
          icon={<VerifiedUserIcon className="mb-2 w-24 h-24 text-warning" />}
          onClick={() => navigate(ROUTES.DASHBOARD.SECURITY.PERMISSIONS.path)}
        />
      </div>
    </PageLayout>
  )
}
