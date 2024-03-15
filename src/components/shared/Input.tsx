'use client'
import { colors } from '@/styles/colorPalette'
import tw, { styled } from 'twin.macro'

const Input = styled.input`
  ${tw`px-16pxr w-full text-15pxr h-48pxr font-medium border`}

  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }

  &[aria-invalid='true'] {
    border-color: ${colors.red};
  }
`

export default Input
