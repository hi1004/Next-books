'use client'
import Button from '@/components/shared/Button'
import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import useDomLoaded from '@/hooks/useDomLoaded'
import useMobile from '@/hooks/useMobile'
import { BookType } from '@/interface'
import { truncateText } from '@/lib/truncatedText'
import Image from 'next/image'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const MainGenreBookList = ({ books }: { books: BookType[] }) => {
  const isMobile = useMobile()
  const domLoaded = useDomLoaded()
  return (
    <section className="py-10 sm:px-24pxr">
      {domLoaded ? (
        <Swiper
          effect="fade"
          id="ALL_RANKING"
          navigation={!isMobile}
          slidesPerView={1}
          slidesPerGroupAuto
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay, Pagination, EffectFade]}
        >
          {books?.map((book) => (
            <SwiperSlide key={book.isbn} className=" bg-no-repeat bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden flex-col lg:w-[450px] ml-14 lg:flex justify-end mb-10">
                  <Flex align="center">
                    <Text typography="t6" color="gray600" bold className="mr-4">
                      自己啓発
                    </Text>
                  </Flex>
                  <Text typography="t1" as="h1" bold className="text-balance">
                    {book.title}
                  </Text>
                  <div className="mt-1 my-6">{book.reviewAverage}</div>

                  <Button
                    size="medium"
                    color="error"
                    className="sm:max-w-[140px]"
                  >
                    詳細を見る
                  </Button>
                </div>
                <div className="sm:h-[400px] sm:flex-row flex pb-10 sm:pb-7 sm:pt-7 pt-14 sm:px-12 gap-4 sm:gap-10 justify-center sm:justify-normal lg:justify-center items-center bg-primary/5 ">
                  <div className="flex sm:hidden my-10pxr absolute top-4 left-8 items-center">
                    <Text typography="t6" bold>
                      自己啓発
                    </Text>
                  </div>
                  <Image
                    src={book.largeImageUrl}
                    width={0}
                    height={0}
                    priority
                    sizes="100vw"
                    alt={book.itemCaption}
                    className="w-auto h-[145px] sm:h-[240px] object-cover"
                  />
                  <div className="flex-col flex h-[145px] w-[180px] lg:hidden justify-end sm:h-[300px] sm:w-full relative">
                    <div className="hidden sm:flex items-center">
                      <Text
                        typography="t6"
                        color="gray600"
                        bold
                        className="mr-4"
                      >
                        自己啓発
                      </Text>
                    </div>
                    <Text
                      typography="t4"
                      as="h1"
                      bold
                      className="text-balance sm:block hidden"
                    >
                      {truncateText(book.title, 40)}
                    </Text>
                    <div>
                      <Text
                        typography="t7"
                        as="h1"
                        bold
                        className="text-balance sm:hidden"
                      >
                        {truncateText(book.title, 40)}
                      </Text>
                      <div className="sm:mt-1 sm:mb-6 mb-3">
                        {book.reviewAverage}
                      </div>
                    </div>
                    <Button
                      size="small"
                      color="error"
                      className="sm:max-w-[140px] max-w-[100px] ml-auto mr-0 sm:absolute bottom-0 right-0"
                    >
                      詳細を見る
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>swiper loading</div>
      )}
    </section>
  )
}

export default MainGenreBookList
