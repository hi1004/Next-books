/** @jsxImportSource @emotion/react */
'use client'
import Flex from '@/components/shared/Flex'
import Skeleton from '@/components/shared/Skeleton'

import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import tw, { TwStyle } from 'twin.macro'

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
  hoverEffect?: boolean
  as?: 'div' | 'li'
  style?: TwStyle
}

const ListRow = ({
  left,
  contents,
  right,
  withArrow,
  onClick,
  as = 'li',
  hoverEffect = false,
  style,
}: ListRowProps) => {
  return (
    <Flex
      as={as}
      align="center"
      onClick={onClick}
      css={[
        listRowContainerStyles,
        hoverEffect && tw`transition cursor-pointer hover:bg-slate-100 `,
        style,
      ]}
    >
      {left && <Flex css={listRowLeftStyles}>{left}</Flex>}
      <Flex css={listRowContentStyles}>{contents}</Flex>
      {right && <Flex css={listRowRightStyles}>{right}</Flex>}
      {withArrow && <RightArrowIcon />}
    </Flex>
  )
}
const listRowContainerStyles = tw`my-8pxr mx-24pxr`
const listRowLeftStyles = tw`mr-14pxr`
const listRowContentStyles = tw`flex-1`
const listRowRightStyles = tw`mr-14pxr`

const ListRowTexts = ({
  title,
  subTitle,
}: {
  title: React.ReactNode
  subTitle?: React.ReactNode
}) => {
  return (
    <Flex direction="column">
      <Text bold>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

const ListRowSkeleton = () => {
  return (
    <Flex as="li" align="center" css={listRowContainerStyles}>
      <Flex css={listRowLeftStyles} />
      <Flex css={listRowContentStyles}>
        <ListRow.Texts
          title={
            <>
              <Skeleton width={67} height={23} />
              <Spacing size={2} />
            </>
          }
          subTitle={
            <ListRow.Texts title={<Skeleton width={80} height={20} />} />
          }
        />
      </Flex>
      <Flex css={listRowRightStyles} />
      <RightArrowIcon />
    </Flex>
  )
}

ListRow.Texts = ListRowTexts
ListRow.Skeleton = ListRowSkeleton
const RightArrowIcon = () => {
  return (
    <svg
      height={20}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
    </svg>
  )
}
export default ListRow
