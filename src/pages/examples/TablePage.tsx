import { Divider } from '@mui/material'
import {
  AlertCustom,
  ModalCustom,
  BadgePoint,
  PageLayout,
  TableCustom,
  TextCustom,
  IAlert,
} from '@components'
import dayjs from 'dayjs'
import { useState } from 'react'

const columns = [
  {
    accessorKey: 'id',
    header: 'Nro.',
    enableEditing: false,
    enableHiding: false,
  },
  {
    accessorKey: 'noEmpleado',
    header: 'Número de Empleado',
    enableEditing: true,
  },
  {
    accessorKey: 'nombreCompleto',
    header: 'Nombre Completo',
    enableEditing: true,
  },
  {
    accessorKey: 'fechaNacimiento',
    header: 'Fecha de Nacimiento',
    enableEditing: true,
    Cell: ({ cell }: any) => {
      const date = cell.getValue()
      return date ? dayjs(date).format('YYYY-MM-DD') : null
    },
  },
  {
    accessorKey: 'fechaIngreso',
    header: 'Fecha de Ingreso',
    enableEditing: true,
    Cell: ({ cell }: any) => {
      const date = cell.getValue()
      return date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : null
    },
  },
  {
    accessorKey: 'estadoRegistro',
    header: 'Estado',
    enableEditing: true,
    visible: true,
    Cell: ({ cell }: any) => {
      let element = null
      if (cell.column.id === 'estadoRegistro') {
        switch (cell.getValue()) {
          case 1:
            element = <BadgePoint text="Habilitado" color="success" />
            break
          case 0:
            element = <BadgePoint text="Inhabilitado" color="warning" />
            break
          default:
            element = <BadgePoint text="No definido" color="dark-gray" />
            break
        }
      } else {
        element = cell.getValue()
      }
      return element
    },
  },
]

const data = [
  {
    id: 1,
    noEmpleado: 1001,
    nombreCompleto: 'John Doe',
    fechaNacimiento: new Date('1997-01-01'),
    fechaIngreso: new Date('2024-01-01'),
    estadoRegistro: 1,
    ENABLED: true,
  },
  {
    id: 2,
    noEmpleado: 1002,
    nombreCompleto: 'John Doe',
    fechaNacimiento: new Date('1997-01-01'),
    fechaIngreso: new Date('2024-01-01'),
    estadoRegistro: 0,
    ENABLED: false,
  },
  {
    id: 4,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: new Date('1997-01-01'),
    fechaIngreso: new Date('2024-01-01'),
    estadoRegistro: 3,
    ENABLED: true,
  },
]

export const TablePage = () => {
  const [idUser, setIdUser] = useState(null)
  const [showInhabilitar, setShowInhabilitar] = useState(false)
  const [showEliminar, setShowEliminar] = useState(false)
  const [showEditar, setShowEditar] = useState<IAlert>({} as IAlert)
  const [showVer, setShowVer] = useState<IAlert>({} as IAlert)
  const [showAgregar, setShowAgregar] = useState<IAlert>({} as IAlert)

  const handleTableActions = (action: any, id: any, _obj: any) => {
    setIdUser(id)
    switch (action) {
      case 'view':
        setShowVer({
          open: true,
          title: 'Ver Información',
          description: `Cree una página para ver la información detallada del registro selecciado con id: ${idUser}`,
          severity: 'info',
        })
        break
      case 'edit':
        setShowEditar({
          open: true,
          title: 'Editar Información',
          description: `Cree una ventana modal para editar la información del registro selecciado con id: ${idUser}`,
          severity: 'info',
        })
        break
      case 'disable':
        setShowInhabilitar(true)
        break
      case 'delete':
        setShowEliminar(true)
        break
      default:
        console.log(action)
        break
    }
  }

  const handleInhabilitar = () => {
    console.log('Inhabilitar el usuario:', idUser)
  }

  const handleEliminar = () => {
    console.log('Eliminar el usuario:', idUser)
  }

  return (
    <PageLayout title="Ejemplos de Tablas">
      <TextCustom text="Tablas" className="text-6xl" />
      <Divider className="mb-4" />
      <AlertCustom
        open={showAgregar.open}
        title={showAgregar.title}
        description={showAgregar.description}
        severity={showAgregar.severity}
        setAlert={setShowAgregar}
      />
      <AlertCustom
        open={showEditar.open}
        title={showEditar.title}
        description={showEditar.description}
        severity={showEditar.severity}
        setAlert={setShowEditar}
      />
      <AlertCustom
        open={showVer.open}
        title={showVer.title}
        description={showVer.description}
        severity={showVer.severity}
        setAlert={setShowVer}
      />
      {/* Tipos de Tablas */}
      <TableCustom
        initialState={{
          columnVisibility: {
            noEmpleado: false,
          },
        }}
        columnas={columns}
        filas={data}
        identifierName="id"
        actions={['view', 'edit', 'disable', 'delete']}
        disabledActions={['disable']}
        actionClick={handleTableActions}
        addText="Agregar"
        onAddRecords={() =>
          setShowAgregar({
            open: true,
            title: 'Agregar Información',
            description: 'Cree una ventana modal para agregar un registro.',
            severity: 'info',
          })
        }
        fileName="Usuarios"
        enabledExport
        enableRowActions
        enableTopToolbar
        enableDensityToggle
        enableFilters
        enableFullScreenToggle
        enableHiding
        enabledAddRecords
      />
      <Divider />
      <ModalCustom
        action={handleInhabilitar}
        open={showInhabilitar}
        setOpen={setShowInhabilitar}
        onDismiss={() => setIdUser(null)}
        type="warning"
        title="¿Está seguro que desea inhabilitarlo?"
        description="El registro no podrá ser utilizado."
      />
      <ModalCustom
        action={handleEliminar}
        open={showEliminar}
        setOpen={setShowEliminar}
        onDismiss={() => setIdUser(null)}
        type="error"
        title="¿Está seguro que desea eliminarlo?"
        description="El registro se podrá recuperar."
      />
    </PageLayout>
  )
}
