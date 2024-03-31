import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import { BookType, RankingBookType } from '@/interface'
import Image from 'next/image'

const Detail = ({
  book,
  detailBook,
}: {
  book: BookType
  detailBook: RankingBookType
}) => {
  return (
    <section>
      <div className="flex flex-col">
        <Flex
          align="center"
          justify="center"
          className="bg-primary/10 py-14pxr"
        >
          <Image
            src={book?.largeImageUrl}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            className="w-auto h-[200px] object-cover"
            alt={book?.itemCaption}
          />
        </Flex>
        <div className="m-4">
          <Text typography="t5" bold className="text-balance">
            {book?.title}
          </Text>
          <Flex>
            <Text>{book?.author}</Text>
            <Text></Text>
          </Flex>
        </div>
      </div>
    </section>
  )
}

export default Detail
