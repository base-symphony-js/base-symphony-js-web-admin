import { Divider } from '@mui/material'
import {
  ButtonCustom,
  IconButtonCustom,
  PageLayout,
  TextCustom,
} from '@components'
import { DeleteIcon, ReplyIcon, SendIcon } from '@assets'

export const ButtonPage = () => {
  return (
    <PageLayout title="Ejemplos de Botones">
      {/* Variante de Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Variantes" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <ButtonCustom text="Por defecto" />
          <div className="flex gap-1">
            <ButtonCustom text="Contained" variant="contained" />
            <ButtonCustom text="Contained" variant="contained" disabled />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Outlined" variant="outlined" />
            <ButtonCustom text="Outlined" variant="outlined" disabled />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Text" variant="text" />
            <ButtonCustom text="Text" variant="text" disabled />
          </div>
        </div>
        <Divider />
      </div>
      {/* Colores para Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <ButtonCustom text="Primario" />
            <ButtonCustom text="Primario" variant="outlined" />
            <ButtonCustom text="Primario" variant="text" />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Secundario" color="secondary" />
            <ButtonCustom
              text="Secundario"
              color="secondary"
              variant="outlined"
            />
            <ButtonCustom text="Secundario" color="secondary" variant="text" />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Información" color="info" />
            <ButtonCustom text="Información" color="info" variant="outlined" />
            <ButtonCustom text="Información" color="info" variant="text" />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Exitoso" color="success" />
            <ButtonCustom text="Exitoso" color="success" variant="outlined" />
            <ButtonCustom text="Exitoso" color="success" variant="text" />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Advertencia" color="warning" />
            <ButtonCustom
              text="Advertencia"
              color="warning"
              variant="outlined"
            />
            <ButtonCustom text="Advertencia" color="warning" variant="text" />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Error" color="error" />
            <ButtonCustom text="Error" color="error" variant="outlined" />
            <ButtonCustom text="Error" color="error" variant="text" />
          </div>
          <div className="flex gap-1">
            <ButtonCustom text="Heredado" color="inherit" />
            <ButtonCustom text="Heredado" color="inherit" variant="outlined" />
            <ButtonCustom text="Heredado" color="inherit" variant="text" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Iconos en botones */}
      <div className="px-4 pt-4">
        <TextCustom text="Iconos" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <ButtonCustom
            text="Contained"
            variant="contained"
            endIcon={<SendIcon />}
          />
          <ButtonCustom
            text="Outlined"
            variant="outlined"
            endIcon={<SendIcon />}
          />
          <ButtonCustom text="Text" variant="text" endIcon={<SendIcon />} />
          <ButtonCustom
            text="Contained"
            variant="contained"
            startIcon={<ReplyIcon />}
          />
          <ButtonCustom
            text="Outlined"
            variant="outlined"
            startIcon={<ReplyIcon />}
          />
          <ButtonCustom text="Text" variant="text" startIcon={<ReplyIcon />} />
        </div>
        <Divider />
      </div>
      {/* TextTransform de Botones */}
      <div className="px-4 pt-4">
        <TextCustom text="TextTransform" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextCustom
            text="Texto por defecto: Por defecto"
            className="text-lg"
          />
          <div className="flex gap-1">
            <TextCustom text="none:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="none" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="capitalize:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="capitalize" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="lowercase:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="lowercase" />
          </div>
          <div className="flex gap-1">
            <TextCustom text="uppercase:" className="text-lg" />
            <ButtonCustom text="Por defecto" textTransform="uppercase" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Colores */}
      <div className="px-4 pt-4">
        <TextCustom text="Colores" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} color="primary" />
            <TextCustom text="Icon Button Primario" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} color="secondary" />
            <TextCustom text="Icon Button Secundario" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} color="info" />
            <TextCustom text="Icon Button Información" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} color="success" />
            <TextCustom text="Icon Button Exitoso" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} color="warning" />
            <TextCustom text="Icon Button Advertencia" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} color="error" />
            <TextCustom text="Icon Button Error" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} color="default" />
            <TextCustom text="Icon Button Por Defecto" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} color="inherit" />
            <TextCustom text="Icon Button Heredado" />
          </div>
          <div className="flex items-center">
            <IconButtonCustom icon={<DeleteIcon />} disabled />
            <TextCustom text="Icon Button Deshabilitado" />
          </div>
        </div>
        <Divider />
      </div>
      {/* Tamaños */}
      <div className="px-4 pt-4">
        <TextCustom text="Tamaños" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <div className="flex flex-column items-center">
            <TextCustom text="Tamaños de botones:" />
            <div className="flex items-center">
              <IconButtonCustom icon={<DeleteIcon />} size={16} />
              <IconButtonCustom icon={<DeleteIcon />} />
              <IconButtonCustom icon={<DeleteIcon />} size={48} />
              <IconButtonCustom icon={<DeleteIcon />} size={64} />
            </div>
          </div>
          <TextCustom text="Medidas: 16px, 32px, 40px, 48px" />
        </div>
        <Divider />
      </div>
    </PageLayout>
  )
}
