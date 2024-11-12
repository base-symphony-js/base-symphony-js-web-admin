import { useCallback, useEffect, useState } from 'react'
import { Accept, FileWithPath, useDropzone } from 'react-dropzone'
import { IconButtonCustom, TextCustom } from '../atoms'
import { CloseIcon } from '@assets'

interface FileWithUrl {
  file: FileWithPath
  previewUrl: string
}
interface UploadFileCustomProps {
  accept?: Accept
  minSize?: number
  maxSize?: number
  maxFiles?: number
  disabled?: boolean
  multiple?: boolean
  onChange?: (values: File[]) => void
}
export const UploadFileCustom = ({
  accept,
  minSize,
  maxSize,
  maxFiles = 20,
  multiple = true,
  disabled,
  onChange = () => null,
}: UploadFileCustomProps) => {
  const [msgError, setMsgError] = useState('')
  const [files, setFiles] = useState<FileWithUrl[]>([])

  useEffect(() => {
    onChange(files.map(file => file.file))
  }, [files])

  const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any[]) => {
    const newFiles: FileWithUrl[] = acceptedFiles.map((file: FileWithPath) => {
      const reader = new FileReader()
      return new Promise<FileWithUrl>(resolve => {
        reader.onloadend = () => {
          const previewUrl = reader.result as string
          resolve({ file, previewUrl })
        }
        reader.readAsDataURL(file)
      })
    })
    if (rejectedFiles.length > 0) {
      const errorMessages: any = {
        'file-too-large': 'El o los archivos son demasiado grandes.',
        'too-many-files': 'Se ha excedido el número máximo de archivos.',
        'file-type-not-accepted':
          'Este o estos tipos de archivos no están permitidos.',
      }
      const rejectionErrors = rejectedFiles.map((file: any) => {
        const errorCode = file.errors[0]?.code
        return errorMessages[errorCode] || 'Error desconocido'
      })
      setMsgError(rejectionErrors[0])
    } else {
      setMsgError('')
    }

    Promise.all(newFiles).then(processedFiles => {
      setFiles(prevFiles => [...prevFiles, ...processedFiles])
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    minSize,
    maxSize,
    maxFiles,
    multiple,
    disabled,
  })

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index)
    setFiles(updatedFiles)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden border-dashed border border-light-gray rounded-sm">
      {files.length > 0 ? (
        <div className="flex gap-4 flex-wrap p-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative h-24 align-middle shadow-lg border-solid border border-gray-100 rounded-md"
            >
              <IconButtonCustom
                icon={<CloseIcon className="text-white w-4 h-4" />}
                className="bg-light-gray absolute -right-2 -top-2"
                size={12}
                onClick={() => handleRemoveFile(index)}
              />
              <img
                src={file.previewUrl}
                alt="foto de perfil"
                className="block w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full cursor-pointer" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="h-32 flex flex-col w-full justify-center items-center transition-colors duration-300 bg-dark-gray text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="64"
                width="64"
                fill="currentColor"
              >
                <path d="M1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811L7 21C3.64378 20.7257 1 17.9216 1 14.5ZM16.8483 18.9868C19.1817 18.8093 21 16.8561 21 14.5C21 12.927 20.1884 11.4962 18.8771 10.6781L18.0714 10.1754L17.9517 9.23338C17.5735 6.25803 15.0288 4 12 4C8.97116 4 6.42647 6.25803 6.0483 9.23338L5.92856 10.1754L5.12288 10.6781C3.81156 11.4962 3 12.927 3 14.5C3 16.8561 4.81833 18.8093 7.1517 18.9868L7.325 19H16.675L16.8483 18.9868ZM13 13V17H11V13H8L12 8L16 13H13Z"></path>
              </svg>
            </div>
          ) : (
            <div className="h-32 flex flex-col w-full justify-center items-center transition-colors duration-300">
              <TextCustom
                text={
                  multiple
                    ? 'Suelte sus archivos aquí'
                    : 'Suelte el archivo aquí'
                }
                color="textSecondary"
                className="italic"
              />
              <TextCustom
                text={
                  multiple
                    ? 'o haga clic para buscarlos'
                    : 'o haga clic para buscarlo'
                }
                color="textSecondary"
                className="italic"
              />
            </div>
          )}
        </div>
      )}
      {msgError && (
        <TextCustom text={msgError} className="text-sm text-error ml-1" />
      )}
    </div>
  )
}
