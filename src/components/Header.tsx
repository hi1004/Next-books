import MenuList from '@/components/MenuList'
import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="h-[60px] bg-primary fixed top-0 left-0 w-full z-50">
      <nav className="container bg-primary mx-auto h-full">
        <Flex align="center" className="h-full gap-16">
          <Link
            href="/"
            className="flex w-[100px] items-center h-full pl-4 text-primary bg-white"
          >
            <Text typography="t6" color="red" bold>
              BOOKs PROJECT
            </Text>
          </Link>
          <MenuList />
        </Flex>
      </nav>
    </header>
  )
}

export default Header
