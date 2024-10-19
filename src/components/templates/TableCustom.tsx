import { MaterialReactTable } from 'material-react-table'
import { MRT_Localization_ES } from 'material-react-table/locales/es'
import { MRT_Localization_EN } from 'material-react-table/locales/en'
import { usePreferences } from '@hooks'

const localization = {
  en: MRT_Localization_EN,
  es: MRT_Localization_ES,
}

interface TableCustomProps {
  columnas: any
  filas: any
  onRowSelectionChange?: (e: any) => void
  initialState?: any
  isDark?: boolean
  isLoading?: boolean
  identifierName?: string
  actions?: any
  disabledActions?: any
  actionClick?: (action: any, id: any, obj: any) => void
  fileName?: string
  onAddRecords?: () => void
  addText?: any
  enabledExport?: boolean
  enabledAddRecords?: boolean
  enableColumnActions?: boolean
  enableColumnFilterModes?: boolean
  enableColumnOrdering?: boolean
  enableEditing?: boolean
  enableDensityToggle?: boolean
  enableFilters?: boolean
  enableFullScreenToggle?: boolean
  enableGrouping?: boolean
  enableHiding?: boolean
  enableMultiRowSelection?: boolean
  enableRowActions?: boolean
  enableRowSelection?: boolean
  enableStickyHeader?: boolean
  enableTopToolbar?: boolean
}

export const TableCustom = ({
  columnas = [],
  filas = [],
  onRowSelectionChange = () => null,
  initialState = {},
  isDark = false,
  isLoading = false,

  identifierName = 'id',
  actions = [],
  disabledActions = [],
  actionClick = () => null,
  fileName = 'Datos',
  onAddRecords = () => null,
  addText = undefined,

  // configuraciones
  enabledExport = false,
  enabledAddRecords = false,
  enableColumnActions = false, // ENCABEZADO: Activar la opción de mostrar más opciones para las columnas
  enableColumnFilterModes = false, // ENCABEZADO: Activar la opción para seleccionar los modos de filtro, se necesita activar las acciones de columnas
  enableColumnOrdering = false, // ENCABEZADO: Activar el arrastre y reordenamiento de columnas
  enableEditing = false, // FILAS: Activar la opción de editar registros
  enableDensityToggle = false, // TOOLBAR: Activar la opción de alternar la densidad de las columnas
  enableFilters = false, // TOOLBAR: Activar la opción de búsqueda y filtro
  enableFullScreenToggle = false, // TOOLBAR: Activar la opción de visualizar la tabla en pantalla completa
  enableGrouping = false, // ENCABEZADO: Activar la opción de arrastrar y agrupar las columnas
  enableHiding = false, // TOOLBAR: Activar la opción de ocultar o visualizar columnas
  enableMultiRowSelection = false, // ENCABEZADO: Activar la selección multiple de registos, se debe de activar la selección única también
  enableRowActions = false, // ENCABEZADO: Activar la columna de acciones
  enableRowSelection = false, // ENCABEZADO: Activar la selección única de registros
  enableStickyHeader = false, // ENCABEZADO: Fijar el encabezado en la parte superior al hacer scroll por la tabla
  enableTopToolbar = false, // TOOLBAR: Activar ToolBar
}: TableCustomProps) => {
  const { lng } = usePreferences()

  return (
    <MaterialReactTable
      /* Configuración Principal */
      localization={localization[lng]} // Configurar el idioma de la tabla
      columns={columnas} // Lista de columnas
      data={filas} // Lista de filas
      state={{ isLoading }} // Estados de loading y fila seleccionada
      getRowId={originalRow => originalRow[identifierName]} // Configurar el identificador de la tabla al seleccionar registros
      onRowSelectionChange={e => onRowSelectionChange(e)} // Evento al seleccionar una fila
      /* Configuración de la tabla */
      positionActionsColumn="last" // Posicionar la columna de acciones al final
      enableColumnActions={enableColumnActions}
      enableColumnFilterModes={enableColumnFilterModes}
      enableColumnOrdering={enableColumnOrdering}
      enableEditing={enableEditing}
      enableDensityToggle={enableDensityToggle}
      enableFilters={enableFilters}
      enableFullScreenToggle={enableFullScreenToggle}
      enableGrouping={enableGrouping}
      enableHiding={enableHiding}
      enableMultiRowSelection={enableMultiRowSelection}
      enableRowActions={enableRowActions}
      enableRowSelection={enableRowSelection}
      enableStickyHeader={enableStickyHeader}
      enableTopToolbar={enableTopToolbar}
      muiTablePaperProps={{ elevation: 0 }}
      /* displayColumnDefOptions={{
        'mrt-row-actions': {
          muiTableHeadCellProps: { size: 'medium', align: 'center' }, // modifica la columna de acciones
          header: '', // texto del header
          minSize: actions.length * 50, // ancho de la columna
        },
      }} */
    />
  )
}
