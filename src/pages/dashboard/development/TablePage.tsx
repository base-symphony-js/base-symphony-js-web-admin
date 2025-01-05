import { Divider } from '@mui/material'
import {
  BadgePoint,
  PageLayout,
  TableCustom,
  IAlert,
  IModalAlert,
  ButtonCustom,
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
  },
  {
    accessorKey: 'fechaIngreso',
    header: 'Fecha de Ingreso',
    enableEditing: true,
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
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 1,
    ENABLED: true,
  },
  {
    id: 2,
    noEmpleado: 1002,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 0,
    ENABLED: false,
  },
  {
    id: 3,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 4,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 5,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 6,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 7,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 8,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 9,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 10,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 11,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
  {
    id: 12,
    noEmpleado: 1004,
    nombreCompleto: 'John Doe',
    fechaNacimiento: dayjs(new Date('1997-01-01')).format('YYYY-MM-DD'),
    fechaIngreso: dayjs(new Date('2024-01-01')).format('YYYY-MM-DD HH:mm:ss'),
    estadoRegistro: 3,
    ENABLED: true,
  },
]

export const TablePage = () => {
  const [userId, setUserId] = useState<number | null>(null)
  const [alert, setAlert] = useState({} as IAlert)
  const [modalAlert, setModalAlert] = useState({} as IModalAlert)

  const handleClean = () => setUserId(null)

  const handleInhabilitar = () => {
    console.log('Inhabilitar el usuario:', userId)
  }

  const handleEliminar = () => {
    console.log('Eliminar el usuario:', userId)
  }

  const handleActions = {
    view: (_obj: any) => {
      setAlert({
        open: true,
        title: 'Ver Información',
        description: `Cree una página para ver la información detallada del registro selecciado con id: ${userId}`,
        severity: 'info',
      })
    },
    edit: (_obj: any) => {
      setAlert({
        open: true,
        title: 'Editar Información',
        description: `Cree una ventana modal para editar la información del registro selecciado con id: ${userId}`,
        severity: 'success',
      })
    },
    disable: (_obj: any) => {
      setModalAlert({
        open: true,
        title: '¿Está seguro que desea inhabilitarlo?',
        description: 'El registro no podrá ser utilizado.',
        severity: 'warning',
        action: handleInhabilitar,
        onDismiss: handleClean,
      })
    },
    delete: (_obj: any) => {
      setModalAlert({
        open: true,
        title: '¿Está seguro que desea eliminarlo?',
        description: 'El registro no podrá ser recuperado.',
        severity: 'error',
        action: handleEliminar,
        onDismiss: handleClean,
      })
    },
  }

  return (
    <PageLayout
      title="Ejemplos de Tablas"
      alert={alert}
      setAlert={setAlert}
      modalAlert={modalAlert}
      setModalAlert={setModalAlert}
    >
      {/* Tipos de Tablas */}
      <TableCustom
        /* DATA */
        columns={columns}
        data={data}
        /* STATE */
        identifierName="id"
        initialState={{ columnVisibility: { id: false } }}
        isLoading={false}
        onRowSelectionChange={selectedRows => console.log(selectedRows)}
        /* EXPORT */
        enableExport
        filename="Usuarios"
        /* ACTIONS */
        actions={['view', 'edit', 'disable', 'delete']}
        onAction={(action, id, obj) => {
          setUserId(id)
          handleActions[action](obj)
        }}
        positionActionsColumn="last"
        /* ROWS */
        enableRowSelection
        enableMultiRowSelection
        /* HEAD */
        enableColumnActions
        enableGrouping
        enableColumnOrdering
        enableStickyHeader
        enableColumnPinning
        enableColumnFilterModes
        /* TOOLBAR */
        enableTopToolbar
        enableFilters
        enableHiding
        enableDensityToggle
        enableFullScreenToggle
        /* RENDERS */
        customToolbar={
          <ButtonCustom
            text="Agregar"
            onClick={() =>
              setAlert({
                open: true,
                title: 'Agregar Información',
                description: 'Cree una ventana modal para agregar un registro.',
                severity: 'info',
              })
            }
          />
        }
      />
      <Divider />
    </PageLayout>
  )
}
