'use client'
import { AiOutlineRight } from 'react-icons/ai'

import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import { RankingBookType } from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import tw, { styled } from 'twin.macro'
const ITrankingList = ({ books }: { books: RankingBookType[] }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  return (
    <section className="w-full pt-10pxr pb-30pxr bg-primary/5 ">
      <Flex align="center" className="px-24pxr pt-20pxr pb-5pxr">
        <Text typography="t3" as="h3" bold>
          IT資格Top30
        </Text>
        <Spacing direction="horizontal" size={10} />
        <AiOutlineRight className="text-25pxr" />
      </Flex>

      <Swiper
        id="IT_RANKING"
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        slideToClickedSlide
        slidesPerView={3}
        breakpoints={{
          1535: {
            slidesPerView: 8,
          },
          1023: {
            slidesPerView: 6,
          },

          765: {
            slidesPerView: 5,
          },
        }}
        loop
        navigation
        centeredSlides
        loopAdditionalSlides={10}
        modules={[Navigation, EffectCoverflow]}
      >
        {books?.map((book, index) => (
          <SwiperSlide
            key={book.rank}
            className="flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (activeSlideIndex === index) {
                  window.location.href = book.itemUrl
                }
              }}
              className="cursor-pointer relative"
            >
              <Flex className="gap-1">
                <RankingNumber className="rank_number">
                  {book.rank}
                </RankingNumber>
                <Image
                  src={book.mediumImageUrls[0]}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto  h-[128px]  object-cover shadow-xl"
                  alt={book.itemCaption}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveSlideIndex(index)
                  }}
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
  ${tw`text-30pxr  text-primary/80 font-black`}
`
