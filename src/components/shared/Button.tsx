/** @jsxImportSource @emotion/react */
'use client'
import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import {
  ButtonColors,
  ButtonSize,
  buttonColorMap,
  buttonOutlineColorMap,
  buttonSizeMap,
} from '@/styles/button'
import { css } from '@emotion/react'
import tw, { styled } from 'twin.macro'

interface ButtonProps {
  color?: ButtonColors
  size?: ButtonSize
  outline?: boolean
  full?: boolean
  disabled?: boolean
  circle?: boolean
}

const BaseButton = styled.button(
  ({
    color = 'primary',
    size = 'small',
    outline,
    full,
    disabled,
    circle,
  }: ButtonProps) => [
    tw`font-bold cursor-pointer flex items-center justify-center outline-none rounded-[6px] hocus:opacity-80 transition duration-75`,
    buttonSizeMap[size],
    full && tw`block w-full rounded-none`,
    disabled && tw`opacity-[0.26]  cursor-not-allowed hover:opacity-[0.26]`,
    outline ? buttonOutlineColorMap[color] : buttonColorMap[color],
    circle && tw`rounded-full w-30pxr h-30pxr p-0`,
  ],
)

const ButtonGroup = ({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) => {
  return (
    <Flex direction="column">
      {title && (
        <>
          <Text typography="t6">{title}</Text>
          <Spacing size={4} />
        </>
      )}
      <Flex css={buttonGroupStyles}>{children}</Flex>
    </Flex>
  )
}

const Button = BaseButton as typeof BaseButton & {
  Group: typeof ButtonGroup
}

Button.Group = ButtonGroup

export default Button

const buttonGroupStyles = css`
  flex-wrap: wrap;
  gap: 10px;
  & button {
    flex: 1;
  }
`
