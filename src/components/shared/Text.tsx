'use client'

import { Colors, colors } from '@/styles/colorPalette'
import { Typography, typographyMap } from '@/styles/typograph'
import { CSSProperties } from 'react'
import { styled } from 'twin.macro'

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}
const Text = styled.span(
  ({
    typography = 't5',
    color = 'black',
    display,
    fontWeight,
    textAlign,
    bold,
  }: TextProps) => [
    typographyMap[typography],
    {
      display,
      textAlign,
      color: colors[color],
      fontWeight: bold ? 'bold' : fontWeight,
    },
  ],
)

export default Text
