/** @jsxImportSource @emotion/react */
'use client'
import Input from '@/components/shared/Input'
import Text from '@/components/shared/Text'
import {
  FocusEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'
import tw from 'twin.macro'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  helpMessage?: React.ReactNode
  hasError?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, helpMessage, hasError, onBlur, onFocus, ...props },
    ref,
  ) {
    const [isFocused, setIsFocused] = useState(false)
    const labelColor = hasError ? 'red' : isFocused ? 'blue' : 'black'

    const handleInputBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setIsFocused(false)
      onBlur?.(e)
    }
    const handleInputFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    return (
      <>
        {label && (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            css={labelContainerStyles}
          >
            {label}
          </Text>
        )}
        <Input
          ref={ref}
          aria-invalid={hasError}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          {...props}
        />
        {helpMessage && (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            css={helpMessageContainerStyles}
          >
            {helpMessage}
          </Text>
        )}
      </>
    )
  },
)
const labelContainerStyles = tw`mb-6pxr`
const helpMessageContainerStyles = tw`mt-6pxr text-12pxr`
export default TextField
