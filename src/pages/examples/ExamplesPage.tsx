import { useState } from 'react'
import { CardMenu, IAlert, PageLayout, TextCustom } from '@components'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@routes'
import { ExtensionIcon } from '@assets'

export const ExamplesPage = () => {
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
          title="Textos y colores"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-info" />}
          onClick={() =>
            navigate(ROUTES.DASHBOARD.EXAMPLES.TEXT_AND_COLORS.path)
          }
        />
        <CardMenu
          title="Botones"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-success" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.BUTTONS.path)}
        />
        <CardMenu
          title="Cajas de texto"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-warning" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.INPUTS_1.path)}
        />
        <CardMenu
          title="Cajas de texto con validación"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-error" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.INPUTS_2.path)}
        />
        <CardMenu
          title="Selects y datepickers"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-info" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.INPUTS_3.path)}
        />
        <CardMenu
          title="Checkboxs, radio botones y switchs"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-success" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.INPUTS_4.path)}
        />
        <CardMenu
          title="Alertas"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-warning" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.ALERTS.path)}
        />
        <CardMenu
          title="Animaciones"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-error" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.LOADERS.path)}
        />
        <CardMenu
          title="Ventanas modales"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-info" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.MODAL_WINDOWS.path)}
        />
        <CardMenu
          title="Tablas"
          icon={<ExtensionIcon className="mb-2 w-24 h-24 text-warning" />}
          onClick={() => navigate(ROUTES.DASHBOARD.EXAMPLES.TABLES.path)}
        />
      </div>
    </PageLayout>
  )
}
