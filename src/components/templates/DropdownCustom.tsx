import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import { ArrowDropDownIcon, ArrowDropUpIcon } from '@assets'

interface DropdownCustomProps {
  component: React.ReactNode
  children: React.ReactNode
  isToogleIcon: boolean
  open: boolean
  setOpen: (value: boolean) => void
  backgroundColor?: string
}

export const DropdownCustom = ({
  component = null,
  children = null,
  isToogleIcon = false,
  open = false,
  setOpen = () => null,
  backgroundColor = '',
}: DropdownCustomProps) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    const { current } = ref
    const handleClickOutside = (event: any) => {
      if (current && !current.contains(event.target) && open) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, open, setOpen])

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Box className="select-none relative text-black" ref={ref}>
      <Box className="flex items-center cursor-pointer" onClick={handleToggle}>
        {component}
        {isToogleIcon &&
          (open ? (
            <ArrowDropUpIcon theme="dark" />
          ) : (
            <ArrowDropDownIcon theme="dark" />
          ))}
      </Box>
      {open && (
        <Box
          className="bg-transparent rounded-md top-12 right-0 absolute z-1000 overflow-hidden"
          style={{ boxShadow: '0px 0px 20px 4px rgba(0,0,0,0.3)' }}
        >
          <div className="py-4 sm:w-72 md:w-80" style={{ backgroundColor }}>
            {children}
          </div>
        </Box>
      )}
    </Box>
  )
}
