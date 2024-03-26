'use client'
import { AiOutlineRight } from 'react-icons/ai'

import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import { RankingBookType } from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SwiperCore from 'swiper'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import tw, { styled } from 'twin.macro'
const ITrankingList = ({ books }: { books: RankingBookType[] }) => {
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(0)
  return (
    <section className="w-full pt-10pxr pb-30pxr bg-primary/5 ">
      <Flex align="center" className="px-24pxr pt-30pxr pb-35pxr">
        <Text typography="t2" bold>
          IT資格Top20
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
          slideShadows: false,
        }}
        spaceBetween={30}
        slideToClickedSlide
        slidesPerView={2}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },

          768: {
            slidesPerView: 3,
          },
        }}
        onSwiper={setSwiper}
        loop
        navigation
        centeredSlides
        loopAdditionalSlides={4}
        modules={[Navigation, EffectCoverflow]}
      >
        {books?.map((book, index) => (
          <SwiperSlide
            key={book.rank}
            className="flex justify-center"
            onClick={(e) => {
              e.preventDefault()
              setActiveSlideIndex(index)
            }}
          >
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault()
                if (activeSlideIndex === index) {
                  window.location.href = book.itemUrl
                }
              }}
              className="cursor-pointer relative"
            >
              <Flex direction="column">
                <RankingNumber className="rank_number">
                  {book.rank}
                  <span className="text-[2vw]">位</span>
                </RankingNumber>
                <Image
                  src={book.mediumImageUrls[0].replace('ex=', '350x350')}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto xl:w-[300px] 2xl:w-[350px] h-auto xl:h-auto object-cover shadow-xl"
                  alt={book.itemCaption}
                />
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ITrankingList
const RankingNumber = styled.div`
  ${tw`text-[5vw] lg:text-[4vw] text-primary/80  font-black tracking-tighter`}
`
