'use client'
import Button from '@/components/shared/Button'
import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import { RankingBookType } from '@/interface'
import { truncateText } from '@/lib/truncatedText'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const AllRankingList = ({ books }: { books: RankingBookType[] }) => {
  return (
    <section className="py-10 px-24pxr">
      <Swiper>
        {books.map((book) => (
          <SwiperSlide key={book.rank} className="max-h-[800px]">
            <div className="grid grid-cols-1 xl:grid-cols-2">
              <div className="hidden flex-col xl:flex justify-end">
                <Flex align="center">
                  <Text typography="t7" color="gray600" bold className="mr-4">
                    総合ランキング
                  </Text>
                  <Text typography="t3" display="inline" color="red">
                    {book.rank}位
                  </Text>
                </Flex>
                <Text typography="t1" as="h1" bold className="text-balance">
                  {book.itemName}
                </Text>
                <div className="mt-1 my-6">{book.reviewAverage}</div>
                <Button
                  size="medium"
                  color="error"
                  className="sm:max-w-[120px]"
                >
                  詳細を見る
                </Button>
              </div>
              <Flex
                align="center"
                justify="space-around"
                className="xl:min-w-[600px] h-[800px] py-7 px-8 bg-primary/10 flex-col "
              >
                <Image
                  src={book.mediumImageUrls[0].replace('ex=', '')}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  alt={book.itemCaption}
                  className="w-auto h-[400px] md:h-[500px] xl:h-[700px] object-cover"
                />
                <div className="flex-col xl:hidden justify-end">
                  <Flex align="center">
                    <Text typography="t7" color="gray600" bold className="mr-4">
                      総合ランキング
                    </Text>
                    <Text typography="t3" display="inline" color="red">
                      {book.rank}位
                    </Text>
                  </Flex>
                  <Text typography="t1" as="h1" bold className="text-balance">
                    {truncateText(book.itemName, 40)}
                  </Text>

                  <div className="mt-1 my-6">{book.reviewAverage}</div>
                  <Button
                    size="medium"
                    color="error"
                    className="sm:max-w-[120px]"
                  >
                    詳細を見る
                  </Button>
                </div>
              </Flex>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default AllRankingList
