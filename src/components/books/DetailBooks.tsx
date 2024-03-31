'use client'
/** @jsxImportSource @emotion/react */
import Button from '@/components/shared/Button'
import Flex from '@/components/shared/Flex'
import { AiOutlineDislike, AiOutlineHeart, AiOutlineLike } from 'react-icons/ai'

import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import { BookType, RankingBookType } from '@/interface'
import Image from 'next/image'
import tw from 'twin.macro'

const DetailBooks = ({
  book,
  detailBook,
}: {
  book: BookType
  detailBook: RankingBookType
}) => {
  console.log(book.largeImageUrl)
  return (
    <section className="pt-16">
      <div className="mt-34">
        <div className="flex-col lg:flex ">
          <div className="gap-40pxr flex flex-col items-end">
            <div className="flex lg:relative flex-col w-full lg:flex-row gap-40pxr lg:items-end items-start">
              <div className="bg-gradient-to-bl rounded-lg flex items-center justify-center from-primary/20 to-primary/5 w-full lg:max-w-[400px] py-34pxr">
                <Image
                  src={book?.largeImageUrl.replace('ex=200x200', 'ex=375x375')}
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                  className="w-auto sm:h-[375px] h-[200px] object-cover"
                  alt={book?.itemCaption}
                />
              </div>
              <Flex
                direction="column"
                className="gap-3 relative w-full lg:static lg:gap-6 px-3"
              >
                <Text
                  typography="t1"
                  bold
                  css={tw`text-lg sm:text-xl md:text-2xl lg:text-3xl`}
                >
                  {book.title}
                </Text>
                <Flex>
                  <Text typography="t6" color="gray700">
                    {book.author}
                  </Text>
                  <Spacing direction="horizontal" size={20} />
                  <Text typography="t6" color="gray700">
                    {book.publisherName}
                  </Text>
                  <Spacing direction="horizontal" size={20} />
                  <Text typography="t6" color="gray700">
                    {book.salesDate}
                  </Text>
                </Flex>
                <Button.Group>
                  <Button size="large" circle outline css={tw`border-gray-400`}>
                    <AiOutlineLike css={tw`text-gray-400`} />
                  </Button>
                  <Button size="large" circle outline css={tw`border-gray-400`}>
                    <AiOutlineDislike css={tw`text-gray-400`} />
                  </Button>
                  <Button size="large" circle outline css={tw`border-gray-400`}>
                    <AiOutlineHeart css={tw`text-gray-400`} />
                  </Button>
                  <Flex
                    align="center"
                    className="absolute  justify-end px-3 lg:px-0 right-0 bottom-0"
                    css={tw`flex lg:hidden`}
                  >
                    <span className="text-lg text-primary font-medium">
                      {book.itemPrice.toLocaleString()}円
                    </span>
                    <Spacing direction="horizontal" size={10} />
                    <Button size="small" color="error" css={tw`rounded-full`}>
                      購入する
                    </Button>
                  </Flex>
                </Button.Group>
                <Flex
                  align="center"
                  className="absolute  justify-end px-3 lg:px-0 right-0 bottom-0"
                  css={tw`hidden lg:flex`}
                >
                  <span className="text-lg text-primary font-medium">
                    {book.itemPrice.toLocaleString()}円
                  </span>
                  <Spacing direction="horizontal" size={10} />
                  <Button size="medium" color="error" css={tw`rounded-full`}>
                    購入する
                  </Button>
                </Flex>
              </Flex>
            </div>
            <div className="px-3 lg:px-0 lg:mt-16 mt-4 flex items-center justify-center flex-col gap-10 w-full`">
              {detailBook.mediumImageUrls
                .slice(1)
                ?.map((imageUrl, index) => (
                  <Image
                    key={index}
                    src={imageUrl.replace('ex=128x128', 'ex=800x800')}
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading="lazy"
                    className="w-full sm:w-[90%] md:w-[80%] lg:md:w-[70%] h-auto min-h-[128px] max-h-[800px]"
                    alt={imageUrl}
                  />
                ))}
              <Text typography="t3">本の紹介</Text>
              <Text typography="t6">{detailBook.itemCaption}</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailBooks
