'use client'
import { AiOutlineRight } from 'react-icons/ai'

import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import { RankingBookType } from '@/interface'
import { colors } from '@/styles/colorPalette'
import Image from 'next/image'
import Link from 'next/link'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import tw, { styled } from 'twin.macro'

const ITrankingList = ({ books }: { books: RankingBookType[] }) => {
  return (
    <section className="w-full pt-10pxr pb-30pxr bg-primary/10 ">
      <Flex align="center" className="px-24pxr">
        <Text typography="t2" bold>
          IT資格Top30
        </Text>
        <Spacing direction="horizontal" size={10} />
        <AiOutlineRight className="text-25pxr" />
      </Flex>

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
        {books?.map((book) => (
          <SwiperSlide key={book.rank} className="flex justify-center">
            <Link href={book.itemUrl} className="cursor-pointer relative">
              <RankingNumber className="rank_number">{book.rank}</RankingNumber>

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
const RankingNumber = styled.div`
  ${tw`text-transparent absolute text-[20vw] sm:text-[10vw] 2xl:text-[8vw] left-0 -bottom-[2vw] font-black tracking-tighter`}
  -webkit-text-stroke: 3px ${colors.red}
`
