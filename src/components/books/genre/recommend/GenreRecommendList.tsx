'use client'
import { AiOutlineRight } from 'react-icons/ai'

import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import useDomLoaded from '@/hooks/useDomLoaded'
import useMobile from '@/hooks/useMobile'
import { BookType } from '@/interface'
import { truncateText } from '@/lib/truncatedText'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const GenreRecommendList = ({
  books,
  title,
}: {
  books: BookType[]
  title: string
}) => {
  const isMobile = useMobile()
  const domLoaded = useDomLoaded()

  return (
    <section className="w-full pt-10pxr px-2 pb-30pxr">
      {domLoaded ? (
        <>
          <Flex align="center" className="px-24pxr py-20pxr">
            <Text
              typography="t5"
              color="gray900"
              bold
              className="hidden sm:block"
            >
              おすすめの{title}
            </Text>
            <Text typography="t6" bold color="gray900" className="sm:hidden">
              おすすめの{title}
            </Text>
            <Spacing direction="horizontal" size={10} />
            <AiOutlineRight className="text-20pxr" />
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
            {books?.map((book) => (
              <SwiperSlide key={book.isbn} className="flex justify-center">
                <Link
                  href={`/search/${book.isbn}`}
                  className="cursor-pointer relative hover:underline"
                >
                  <Flex justify="center">
                    <Image
                      src={book?.largeImageUrl}
                      width={0}
                      height={0}
                      sizes="100vw"
                      loading="lazy"
                      className="w-auto  h-[120px]  object-cover shadow-xl"
                      alt={book.itemCaption}
                    />
                  </Flex>

                  <Text typography="t7" textAlign="center" display="block">
                    {truncateText(book.title, 13)}
                  </Text>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div>loading...2</div>
      )}
    </section>
  )
}

export default GenreRecommendList
