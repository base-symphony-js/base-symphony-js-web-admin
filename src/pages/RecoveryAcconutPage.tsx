import { useState } from 'react'
import { LoaderCustom } from '@components'
import { COLORS } from '@common'
import { useColorScheme } from '@mui/material'

export const RecoveryAcconutPage = () => {
  const { colorScheme: theme } = useColorScheme()
  const [loader, setLoader] = useState(false)
  const backgroundColor = theme === 'dark' ? COLORS.general : COLORS.info

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundColor,
      }}
    >
      {loader && <LoaderCustom mode="modal" />}
    </div>
  )
}
