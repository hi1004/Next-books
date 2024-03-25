'use client'

import Text from '@/components/shared/Text'
import { RankingBookType } from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import tw from 'twin.macro'

const ITrankingList = ({ books }: { books: RankingBookType[] }) => {
  return (
    <section className="w-full pt-10pxr pb-30pxr bg-primary/10 ">
      <Text typography="t2" bold>
        IT資格 Top10 &gt;
      </Text>
      <Swiper
        id="IT_RANKING"
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },

          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },
        }}
        loop
        navigation
        centeredSlides
        modules={[Navigation, EffectCoverflow]}
      >
        {books.map((book) => (
          <SwiperSlide key={book.rank} className="flex justify-center">
            <RankingNumber>{book.rank}</RankingNumber>
            <Link href={book.itemUrl} className="cursor-pointer">
              <Image
                src={book.mediumImageUrls[0].replace('ex=', '350x350')}
                width={0}
                height={0}
                priority
                sizes="100vw"
                className="w-auto xl:w-[300px] 2xl:w-[350px] h-[300px] xl:h-auto object-cover"
                alt={book.itemCaption}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ITrankingList
const RankingNumber = tw.div`text-transparent absolute text-100pxr [text-shadow: red] [-webkit-text-stroke: 1px red] left-0 bottom-0`
