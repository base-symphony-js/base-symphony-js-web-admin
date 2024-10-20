import { MRT_RowData, MRT_Row } from 'material-react-table'
import { Box, IconButton, IconButtonProps, Tooltip } from '@mui/material'
import {
  DeleteIcon,
  EditIcon,
  NotInterestedIcon,
  VisibilityIcon,
} from '@assets'

type ColorType = IconButtonProps['color']

export type ITableActions = 'view' | 'edit' | 'disable' | 'delete'

export type IOnAction = (action: ITableActions, id: any, obj: any) => void

interface RowActionTableProps {
  row: MRT_Row<MRT_RowData>
  actions: ITableActions[]
  identifierName: string
  onAction: IOnAction
}

export const RowActionTable = ({
  row,
  identifierName,
  actions = [],
  onAction,
}: RowActionTableProps) => {
  const titles = {
    view: 'View',
    edit: 'Edit',
    disable: 'Disable',
    delete: 'Delete',
  }

  const icons = {
    view: <VisibilityIcon />,
    edit: <EditIcon />,
    disable: <NotInterestedIcon />,
    delete: <DeleteIcon />,
  }

  const colors: Record<string, ColorType> = {
    view: 'primary',
    edit: 'success',
    disable: 'warning',
    delete: 'error',
  }

  return (
    <Box className="flex">
      {actions.map(action => (
        <Tooltip key={action} title={titles[action]}>
          <IconButton
            onClick={() =>
              onAction(action, row.original[identifierName], row.original)
            }
            color={colors[action]}
            sx={{ width: 24 * 1.5, height: 24 * 1.5 }}
          >
            {icons[action]}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}
