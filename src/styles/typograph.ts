import tw from 'twin.macro'

export const typographyMap = {
  t1: tw`text-30pxr leading-[1.35]`,
  t2: tw`text-26pxr leading-[1.34]`,
  t3: tw`text-22pxr leading-[1.4]`,
  t4: tw`text-20pxr leading-[1.45]`,
  t5: tw`text-17pxr leading-[1.5]`,
  t6: tw`text-15pxr leading-[1.5]`,
  t7: tw`text-13pxr leading-[1.5]`,
}

export type Typography = keyof typeof typographyMap
