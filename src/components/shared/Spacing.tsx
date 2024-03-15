'use client'
import { Colors, colors } from '@/styles/colorPalette'
import { styled } from 'twin.macro'

interface SpacingProps {
  size: number
  direction?: 'vertical' | 'horizontal'
  backgroundColor?: Colors
}

const Spacing = styled.div(
  ({ size, direction = 'vertical', backgroundColor }: SpacingProps) => [
    direction === 'vertical' ? `height: ${size}px;` : `width: ${size}px;`,
    backgroundColor && `background-color: ${colors[backgroundColor]};`,
  ],
)

export default Spacing
