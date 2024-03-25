'use client'
import Button from '@/components/shared/Button'
import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import { RankingBookType } from '@/interface'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const AllRankingList = ({ books }: { books: RankingBookType[] }) => {
  return (
    <section className="py-10 px-24pxr">
      <Swiper>
        {books?.map((book) => (
          <SwiperSlide key={book.rank}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Flex direction="column" className="justify-end">
                <Text typography="t7" color="gray600" bold>
                  総合ランキング
                </Text>
                <Text typography="t1" as="h1" bold>
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
              </Flex>
              <Flex
                align="center"
                justify="center"
                className="xl:min-w-[600px] py-7 bg-primary/10"
              >
                <Image
                  src={book.mediumImageUrls[0].replace('ex=', '')}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  alt={book.itemCaption}
                  className="w-auto h-[400px] xl:h-[800px] object-cover"
                />
              </Flex>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default AllRankingList
