import { Skeleton, SkeletonProps } from '@mui/material'

interface SkeletonCustomProps {
  length: number
  variant: SkeletonProps['variant']
  height: number
  width: number
  className: string
}

export const SkeletonCustom = ({
  length = 0,
  variant = 'rounded',
  height = 32,
  width = 32,
  className = 'flex flex-wrap gap-2',
}: SkeletonCustomProps) => {
  const skeletonArray = Array.from({ length })
  return (
    <div className={className}>
      {skeletonArray.map((_, index) => (
        <Skeleton key={index} variant={variant} height={height} width={width} />
      ))}
    </div>
  )
}
