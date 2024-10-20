import {
  MRT_ColumnDef,
  MRT_RowData,
  MRT_RowSelectionState,
  MRT_TableState,
  MaterialReactTable,
} from 'material-react-table'
import { MRT_Localization_ES } from 'material-react-table/locales/es'
import { MRT_Localization_EN } from 'material-react-table/locales/en'
import { usePreferences } from '@hooks'
import { ExportTable } from './ExportTable'
import { IOnAction, ITableActions, RowActionTable } from './RowActionTable'
import { useEffect, useState } from 'react'

const localization = {
  en: MRT_Localization_EN,
  es: MRT_Localization_ES,
}

interface TableCustomProps {
  /* DATA */
  columns: MRT_ColumnDef<MRT_RowData, any>[]
  data: MRT_RowData[]
  /* STATE */
  identifierName?: string
  initialState?: Partial<MRT_TableState<MRT_RowData>>
  isLoading?: boolean
  onRowSelectionChange?: (e: string[]) => void
  /* EXPORT */
  enableExport?: boolean
  filename?: string
  /* ACTIONS */
  actions?: ITableActions[]
  onAction?: IOnAction
  positionActionsColumn?: 'last' | 'first'
  /* ROWS */
  enableRowSelection?: boolean
  enableMultiRowSelection?: boolean
  /* HEAD */
  enableColumnActions?: boolean
  enableGrouping?: boolean
  enableColumnOrdering?: boolean
  enableStickyHeader?: boolean
  enableColumnPinning?: boolean
  enableColumnFilterModes?: boolean
  /* TOOLBAR */
  enableTopToolbar?: boolean
  enableFilters?: boolean
  enableHiding?: boolean
  enableDensityToggle?: boolean
  enableFullScreenToggle?: boolean
  /* RENDERS */
  customToolbar?: React.ReactNode
}

export const TableCustom = ({
  /* DATA */
  columns = [], // columns
  data = [], // data
  /* STATE */
  identifierName = 'id', // Main column name
  initialState,
  isLoading = false, // State of charge
  onRowSelectionChange = () => null, // Event when selecting multiple lines
  /* EXPORT */
  enableExport = false,
  filename, // Export file name
  /* ACTIONS */
  actions = [], // Activate the action column with a list of actions
  onAction = () => null, // Events for each of the actions
  positionActionsColumn = 'last', // Position the action column at the end
  /* ROWS */
  enableRowSelection = false, // Enable single record selection
  enableMultiRowSelection = false, // Activate multiple selection of records, single selection must also be activated
  /* HEAD */
  enableColumnActions = false, // Enable the option to show more options for columns
  enableGrouping = false, // Enable the option to drag and group columns
  enableColumnOrdering = false, // Enable column dragging and reordering
  enableStickyHeader = false, // Fix header to top when scrolling table
  enableColumnPinning = false, // Enable the option to anchor a column
  enableColumnFilterModes = false, // Enable the option to select filter modes, you need to enable column actions
  /* TOOLBAR */
  enableTopToolbar = false, // Activate ToolBar
  enableFilters = false, // Activate the search and filter option
  enableHiding = false, // Activate the option to hide or display columns
  enableDensityToggle = false, // Activate the option to toggle column density
  enableFullScreenToggle = false, // Enable the option to display the table in full screen
  /* RENDERS */
  customToolbar, // Custom Toolbar
}: TableCustomProps) => {
  const { lng } = usePreferences()
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({})

  useEffect(() => {
    onRowSelectionChange(Object.keys(rowSelection))
  }, [rowSelection])

  return (
    <MaterialReactTable
      // DATA
      columns={columns}
      data={data}
      initialState={{
        density: 'compact',
        grouping: initialState?.grouping,
        columnVisibility: initialState?.columnVisibility,
        columnPinning: { left: [], right: [] },
        ...initialState,
      }}
      /* STATE */
      getRowId={originalRow => originalRow[identifierName]}
      state={{ isLoading, rowSelection }}
      onRowSelectionChange={setRowSelection}
      /* LANGUAGE */
      localization={localization[lng]} // Setting the table language
      /* ACTIONS */
      positionActionsColumn={positionActionsColumn}
      enableRowActions={actions.length > 0 ? true : false}
      /* ROWS */
      enableRowSelection={enableRowSelection}
      enableMultiRowSelection={enableMultiRowSelection}
      /* HEAD */
      enableColumnActions={enableColumnActions}
      enableGrouping={enableGrouping}
      enableColumnOrdering={enableColumnOrdering}
      enableStickyHeader={enableStickyHeader}
      enableColumnPinning={enableColumnPinning}
      enableColumnFilterModes={enableColumnFilterModes}
      /* TOOLBAR */
      enableTopToolbar={enableTopToolbar}
      enableFilters={enableFilters}
      enableHiding={enableHiding}
      enableDensityToggle={enableDensityToggle}
      enableFullScreenToggle={enableFullScreenToggle}
      /* RENDERS */
      renderTopToolbarCustomActions={({ table }) => (
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="flex gap-2">{customToolbar}</div>
          {enableExport && (
            <ExportTable table={table} data={data} filename={filename} />
          )}
        </div>
      )}
      renderRowActions={({ row }) => (
        <RowActionTable
          row={row}
          identifierName={identifierName}
          actions={actions}
          onAction={onAction}
        />
      )}
      /* STYLES */
      muiTablePaperProps={{ elevation: 0 }}
    />
  )
}
