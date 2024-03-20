/** @jsxImportSource @emotion/react */
'use client'
import Text from '@/components/shared/Text'
import { CATEGORY_ARR, SELECT_LABEL } from '@/constants/category'
import { BookType } from '@/interface'

import BooksSwiper from '@/components/BooksSwiper'
import Select from '@/components/shared/Select'
import { replaceCategoryName } from '@/lib/replaceCategoryName'
import { Fragment, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import tw from 'twin.macro'

type CategoryType = {
  [key: string]: BookType[]
}

const BookList = ({ category }: { category: CategoryType }) => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ARR[0])

  return (
    <section>
      <Text as="h1" typography="t1" bold>
        おすすめ
      </Text>
      <SwiperContainer>
        <Select
          options={SELECT_LABEL}
          className="2xl:hidden mt-5"
          onChange={(selectedValue) =>
            setSelectedCategory(selectedValue.target.value)
          }
        />
        {CATEGORY_ARR.map((categoryName) => (
          <Fragment key={categoryName}>
            <Text
              typography="t5"
              className={`hidden 2xl:inline-block md:mr-4 lg:mr-10 last-of-type:mr-0 relative top-10 cursor-pointer hover:border-b-2 hover:text-red-500 border-b-red-400  ${selectedCategory === categoryName && 'border-b-2'}`}
              color={selectedCategory === categoryName ? 'red' : 'gray700'}
              onClick={() => setSelectedCategory(categoryName)}
            >
              {replaceCategoryName(categoryName)}
            </Text>
            <SwiperListContainer
              key={categoryName}
              css={[selectedCategory !== categoryName && tw`hidden`]}
            >
              <BooksSwiper books={category[categoryName]} />
            </SwiperListContainer>
          </Fragment>
        ))}
      </SwiperContainer>
    </section>
  )
}

export default BookList
const SwiperContainer = tw.div`relative px-6 h-[530px] md:flex 2xl:block`
const SwiperListContainer = tw.div`absolute bottom-10 px-6 left-0 w-full h-[400px]`
