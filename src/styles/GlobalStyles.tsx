'use client'

import { colorPalette } from '@/styles/colorPalette'
import { Global } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles, css, theme } from 'twin.macro'

const customStyles = css({
  ...colorPalette,
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
