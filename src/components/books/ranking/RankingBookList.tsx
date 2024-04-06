'use client'
import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import useDomLoaded from '@/hooks/useDomLoaded'
import useMobile from '@/hooks/useMobile'
import { BookType } from '@/interface'
import { truncateText } from '@/lib/truncatedText'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import tw from 'twin.macro'

const RankingBookList = ({ books }: { books: BookType[] }) => {
  const isMobile = useMobile()
  const domLoaded = useDomLoaded()
  return (
    <section className="w-full pt-10pxr px-2 pb-30pxr bg-primary/5 ">
      {domLoaded ? (
        <>
          <Flex align="center" className="p-20pxr">
            <Text typography="t3" bold className=" hidden sm:block">
              IT・eコマース
              <Text typography="t3" color="red">
                ランキング
              </Text>
            </Text>
            <Text typography="t5" bold className="block sm:hidden">
              IT・eコマース
              <Text typography="t5" color="red">
                ランキング
              </Text>
            </Text>
            <Spacing direction="horizontal" size={10} />
            <AiOutlineRight className="sm:text-25pxr text-20pxr" />
          </Flex>

          <Swiper
            slidesPerView={3.5}
            breakpoints={{
              1023: {
                slidesPerView: 3.5,
              },

              765: {
                slidesPerView: 3.5,
              },
            }}
            touchRatio={3.5}
            navigation={!isMobile}
            modules={[Navigation]}
          >
            {books?.map((book, rank) => (
              <SwiperSlide key={book.isbn}>
                <Flex justify="center">
                  <Link
                    href={`/detail/${book.isbn}`}
                    className="cursor-pointer slide-link inline-block relative"
                  >
                    <span className="md:absolute ranking font-black relative block text-30pxr text-center md:text-[7vw] md:left-0 bottom-0 text-primary ">
                      {rank + 1}
                    </span>
                    <Image
                      src={book?.largeImageUrl.replace(
                        'ex=200x200',
                        'ex=300x300',
                      )}
                      width={0}
                      height={0}
                      sizes="100vw"
                      loading="lazy"
                      className="w-auto md:h-[200px] mx-auto xl:h-[300px] h-[120px]  object-cover shadow-xl"
                      alt={book.itemCaption}
                    />
                    <p className="ranking_title text-center w-full mt-4 hidden xl:inline-block">
                      {truncateText(book.title, 20)}
                    </p>
                    <p className="ranking_title text-center w-full  mt-4 inline-block text-sm xl:hidden">
                      {truncateText(book.title, 13)}
                    </p>
                  </Link>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div>rankingloading...</div>
      )}
    </section>
  )
}

export default RankingBookList
const RankingNumber = tw.span`text-30pxr  text-primary/80 font-black`
