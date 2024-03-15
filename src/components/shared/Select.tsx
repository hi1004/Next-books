/** @jsxImportSource @emotion/react */
'use client'
import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import { colors } from '@/styles/colorPalette'
import { SelectHTMLAttributes, forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

export interface Option {
  label: string
  value: string | number | undefined
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  placeholder?: string
  options: Option[]
}

const BaseSelect = styled.select`
  ${tw`h-54pxr rounded-[16px] cursor-pointer  border-none px-16pxr bg-gray-100`},
  &:required:invalid {
    color: ${colors.gray500};
  }
`

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, placeholder, value, ...props },
  ref,
) {
  return (
    <Flex direction="column">
      {label && (
        <Text
          typography="t7"
          color="black"
          display="inline-block"
          css={tw`mb-6pxr`}
        >
          {label}
        </Text>
      )}

      <BaseSelect ref={ref} required={true} value={value} {...props}>
        {placeholder && (
          <option hidden value="">
            {placeholder}
          </option>
        )}
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </BaseSelect>
    </Flex>
  )
})

export default Select
