import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import useMobile from '@/hooks/useMobile'
import { BookType } from '@/interface'
import { truncateText } from '@/lib/truncatedText'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const BooksSwiper = ({ books }: { books: BookType[] }) => {
  const isMobile = useMobile()

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.5}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      navigation={!isMobile}
      touchRatio={4}
      modules={[Navigation]}
    >
      {books.map((book) => (
        <SwiperSlide
          key={book.id}
          className="cursor-pointer recommend-slide hover:drop-shadow-lg"
        >
          <>
            <Link
              href={{
                pathname: `/books/${book.id}`,
              }}
            >
              <Flex
                direction="column"
                className="w-full shadow-md py-10 relative rounded-2xl overflow-hidden bg-gradient-to-bl from-primary/20 to-primary/5"
                justify="center"
                align="center"
              >
                <Image
                  src={book?.largeImageUrl.replace('ex=120x120', 'ex=200x200')}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-auto sm:h-[200px] h-[145px] hover:scale-110"
                  alt={book.itemCaption}
                />
              </Flex>
              <Flex direction="column" className="pt-4">
                <Text
                  typography="t6"
                  display="inline-block"
                  className="hover:underline"
                >
                  {truncateText(book.title, 29)}
                </Text>

                <Text typography="t7" color="gray" display="inline-block">
                  {book.author}
                </Text>
                <div>{book.reviewAverage}</div>

                <Text typography="t3" color="red">
                  {book.itemPrice.toLocaleString()}円
                  <small className="text-sm">(税込)</small>
                </Text>
              </Flex>
            </Link>
          </>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BooksSwiper
