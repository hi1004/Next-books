'use client'
import { AiOutlineRight } from 'react-icons/ai'

import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import useMobile from '@/hooks/useMobile'
import { RankingBookType } from '@/interface'
import { truncateText } from '@/lib/truncatedText'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import tw, { styled } from 'twin.macro'
const ITrankingList = ({ books }: { books: RankingBookType[] }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const isMobile = useMobile()

  return (
    <section className="w-full pt-10pxr px-2 pb-30pxr bg-primary/5 ">
      <Flex align="center" className="px-24pxr py-20pxr">
        <Text typography="t3" as="h3" bold className="hidden sm:block">
          おすすめのIT資格
        </Text>
        <Text typography="t6" as="h6" bold className="sm:hidden">
          おすすめのIT資格
        </Text>
        <Spacing direction="horizontal" size={10} />
        <AiOutlineRight className="text-25pxr" />
      </Flex>

      <Swiper
        id="IT_RANKING"
        slideToClickedSlide={!isMobile}
        slidesPerView={3.5}
        breakpoints={{
          1535: {
            slidesPerView: 8,
            centeredSlides: true,
            loop: true,
          },
          1023: {
            slidesPerView: 6,
            centeredSlides: true,
            loop: true,
          },

          765: {
            slidesPerView: 4,
            centeredSlides: true,
            loop: true,
          },
          450: {
            loop: false,
            centeredSlides: false,
          },
        }}
        touchRatio={3}
        navigation={!isMobile}
        loopAdditionalSlides={10}
        modules={[Navigation]}
      >
        {books?.map((book, index) => (
          <SwiperSlide key={book.rank} className="flex justify-center">
            {isMobile ? (
              <Link href={book.itemUrl} className="relative">
                <Flex justify="center">
                  <Image
                    src={book.mediumImageUrls[0].replace('ex=', '128x128x')}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto  h-[128px]  object-cover shadow-xl"
                    alt={book.itemCaption}
                    onClick={(e) => {
                      setActiveSlideIndex(index)
                    }}
                  />
                </Flex>

                <Text typography="t7" textAlign="center" display="block">
                  {truncateText(book.itemName, 13)}
                </Text>
              </Link>
            ) : (
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
                <Flex justify="center">
                  <Image
                    src={book.mediumImageUrls[0].replace('ex=', '128x128x')}
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

                <Text typography="t7" textAlign="center" display="block">
                  {truncateText(book.itemName, 13)}
                </Text>
              </Link>
            )}
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
