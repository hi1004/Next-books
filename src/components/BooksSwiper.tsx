import Button from '@/components/shared/Button'
import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import { BookType } from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const BooksSwiper = ({ books }: { books: BookType[] }) => {
  return (
    <>
      <Swiper
        spaceBetween={20}
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
        navigation
        modules={[Navigation]}
      >
        {books.map((book) => (
          <SwiperSlide
            key={book.id}
            className="cursor-pointer hover:drop-shadow-lg"
          >
            <Link href={`/books/${book.category}/${book.id}`}>
              <Flex
                direction="column"
                className="w-full h-full shadow-md py-10 relative rounded-2xl overflow-hidden bg-blue-300/15 "
                justify="center"
                align="center"
              >
                <Image
                  src={book.largeImageUrl}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-auto h-[200px] hover:scale-110"
                  alt={book.itemCaption}
                />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                  <Button.Group>
                    <Button outline circle>
                      <IoMdAdd className="text-20pxr" />
                    </Button>
                    <Button circle>
                      <FaShoppingCart />
                    </Button>
                  </Button.Group>
                </div>
              </Flex>
              <Flex direction="column" className="pt-4">
                <Text
                  typography="t6"
                  bold
                  display="inline-block"
                  className="hover:underline"
                >
                  {book.title}
                </Text>

                <Text typography="t7" color="gray" display="inline-block">
                  {book.author}
                </Text>

                <Text typography="t1" color="red">
                  {book.itemPrice.toLocaleString()}円
                  <small className="text-sm">(税込)</small>
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default BooksSwiper
