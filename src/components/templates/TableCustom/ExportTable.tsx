import { MRT_Row, MRT_RowData, MRT_TableInstance } from 'material-react-table'
import { mkConfig, generateCsv, download } from 'export-to-csv'
import { Box } from '@mui/material'
import {
  ButtonCustom,
  DialogCustom,
  IconButtonCustom,
  TextCustom,
} from '@components'
import { FileDownloadIcon } from '@assets'
import { useState } from 'react'

interface ExportTableProps {
  table: MRT_TableInstance<MRT_RowData>
  data: any
  filename?: string
}

export const ExportTable = ({
  table,
  data,
  filename = 'generated',
}: ExportTableProps) => {
  const [showOptions, setShowOptions] = useState(false)

  const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
    filename,
  })

  const handleExportRows = (rows: MRT_Row<any>[]) => {
    const rowData = rows.map(row => row.original)
    const csv = generateCsv(csvConfig)(rowData)
    download(csvConfig)(csv)
  }

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data)
    download(csvConfig)(csv)
  }

  return (
    <Box className="flex flex-wrap gap-4">
      <IconButtonCustom
        icon={<FileDownloadIcon />}
        onClick={() => setShowOptions(true)}
        size={24}
        color="success"
      />
      <DialogCustom
        title="Opción de Descarga"
        open={showOptions}
        setOpen={setShowOptions}
        disabledCancelAction
      >
        <div className="flex flex-col gap-4">
          <TextCustom text="Descargar la información en formato (.csv)." />
          <ButtonCustom
            text="Toda la información" // export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
            onClick={handleExportData}
            startIcon={<FileDownloadIcon />}
            variant="outlined"
          />
          <ButtonCustom
            text="Información filtrada" // export all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FileDownloadIcon />}
            variant="outlined"
            disabled={table.getPrePaginationRowModel().rows.length === 0}
          />
          <ButtonCustom
            text="Página actual" // export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
            onClick={() => handleExportRows(table.getRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="outlined"
            disabled={table.getRowModel().rows.length === 0}
          />
          <ButtonCustom
            text="Filas seleccionadas" // only export selected rows
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            startIcon={<FileDownloadIcon />}
            variant="outlined"
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
          />
        </div>
      </DialogCustom>
    </Box>
  )
}
