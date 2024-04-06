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
  genreName,
}: {
  book: BookType
  detailBook?: RankingBookType
  genreName?: string
}) => {
  return (
    <section className="pt-16">
      <div className="mt-34">
        <div className="flex-col lg:flex">
          <div className="gap-40pxr flex flex-col">
            <div className="flex lg:relative flex-col w-full lg:flex-row gap-40pxr lg:items-end items-start">
              <div className="bg-gradient-to-bl rounded-lg flex items-center justify-center from-primary/20 to-primary/5 w-full lg:max-w-[400px] py-34pxr">
                <Image
                  src={book?.largeImageUrl?.replace('ex=200x200', 'ex=375x375')}
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
                <Flex className="flex-wrap gap-x-5">
                  {book.author && (
                    <Text typography="t6" color="gray700">
                      {book.author}
                    </Text>
                  )}

                  <Text typography="t6" color="gray700" css={tw`text-red-400`}>
                    {book.publisherName}
                  </Text>
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
                    className="absolute justify-end px-3 lg:px-0 right-0 -bottom-[3px]"
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
            <BookDetailInfo>
              <div className="lg:mt-16 mt-4 flex items-center justify-center flex-col gap-10 w-full`">
                {detailBook?.mediumImageUrls
                  .slice(1)
                  ?.map((imageUrl, index) => (
                    <Image
                      key={index}
                      src={imageUrl.replace('ex=128x128', 'ex=800x1200')}
                      width={0}
                      height={0}
                      sizes="100vw"
                      loading="lazy"
                      className="w-full sm:w-[90%] md:w-[80%] lg:md:w-[70%] h-auto min-h-[128px] max-h-[1200px]"
                      alt={imageUrl}
                    />
                  ))}
              </div>
              <Flex direction="column" className="mt-10 mb-8">
                <Text typography="t3" display="block" bold>
                  商品説明
                </Text>
                <Text typography="t6" display="block">
                  {book.itemCaption}
                </Text>
              </Flex>
              <Flex direction="column" className="mb-2">
                <Text typography="t4" bold>
                  商品情報
                </Text>

                <Text typography="t5">発売日：{book.salesDate}</Text>

                <Text typography="t5">著者:{book.author}</Text>
                <Text typography="t5">出版社:{book.publisherName}</Text>
                {book.seriesName && (
                  <Text typography="t5">シリーズ:{book.seriesName}</Text>
                )}

                <Text typography="t5">
                  カテゴリ:
                  {genreName || (book.category === 'mind' && 'マインド')}
                </Text>
                <Text typography="t5" display="block">
                  発行形態:{book.size}
                </Text>
                {book.isbn && (
                  <Text typography="t5" display="block">
                    ISBN:{book.isbn}
                  </Text>
                )}
              </Flex>
            </BookDetailInfo>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailBooks
const BookDetailInfo = tw.div`px-3 lg:px-0`
