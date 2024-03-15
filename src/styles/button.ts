import { css } from '@emotion/react'
import tw from 'twin.macro'
import { colors } from './colorPalette'

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.blue};
    color: ${colors.white};
  `,
  success: css`
    background-color: ${colors.teal900};
    color: ${colors.white};
  `,
  error: css`
    background-color: ${colors.red};
    color: ${colors.white};
  `,
}

export const buttonOutlineColorMap = {
  primary: css`
    background-color: ${colors.white};
    color: ${colors.blue};
    border: 1px solid ${colors.blue};
  `,
  success: css`
    background-color: ${colors.white};
    color: ${colors.teal900};
    border: 1px solid ${colors.teal900};
  `,
  error: css`
    background-color: ${colors.white};
    color: ${colors.red};
    border: 1px solid ${colors.red};
  `,
}

export const buttonSizeMap = {
  small: tw`text-13pxr px-9pxr py-8pxr`,
  medium: tw`text-15pxr px-15pxr py-10pxr`,
  large: tw`text-18pxr px-10pxr py-12pxr`,
}

export type ButtonColors = keyof typeof buttonColorMap
export type ButtonSize = keyof typeof buttonSizeMap
