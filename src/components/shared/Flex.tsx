'use client'
import { CSSProperties } from 'react'
import tw, { styled } from 'twin.macro'

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

const Flex = styled.div(({ align, justify, direction }: FlexProps) => [
  tw`flex`,
  {
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
  },
])

export default Flex
