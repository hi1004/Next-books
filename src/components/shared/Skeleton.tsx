'use client'
import { colors } from '@/styles/colorPalette'
import tw, { styled } from 'twin.macro'

const Skeleton = styled.div(
  ({ width, height }: { width: number; height: number }) => [
    tw`animate-pulse`,
    { width, height, backgroundColor: colors.gray300 },
  ],
)

export default Skeleton
