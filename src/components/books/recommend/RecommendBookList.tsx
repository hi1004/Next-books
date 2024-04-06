/** @jsxImportSource @emotion/react */
'use client'
import { CATEGORY_ARR, SELECT_LABEL } from '@/constants/category'
import { BookType } from '@/interface'
import { Fragment, useState } from 'react'

import BooksSwiper from '@/components/books/recommend/BooksSwiper'
import Select from '@/components/shared/Select'
import Text from '@/components/shared/Text'
import useDomLoaded from '@/hooks/useDomLoaded'
import { replaceCategoryName } from '@/lib/replaceCategoryName'
import tw, { styled } from 'twin.macro'

type CategoryType = {
  [key: string]: BookType[]
}

const RecommendBookList = ({ category }: { category: CategoryType }) => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ARR[0])
  const domLoaded = useDomLoaded()

  return (
    <section className="mt-10pxr">
      {domLoaded ? (
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
                typography="t6"
                className={`hidden 2xl:inline-block md:mr-4 lg:mr-10 last-of-type:mr-0 relative top-10 cursor-pointer hover:border-b-2 hover:text-primary border-b-primary  ${selectedCategory === categoryName && 'border-b-2'}`}
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
      ) : (
        <div>recommend layout loading</div>
      )}
    </section>
  )
}

export default RecommendBookList
const SwiperContainer = styled.div`
  ${tw`relative px-6 h-[530px] md:flex 2xl:block`}
`
const SwiperListContainer = tw.div`absolute bottom-10 px-6 left-0 w-full h-[400px]`
