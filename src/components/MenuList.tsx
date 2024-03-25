import Flex from '@/components/shared/Flex'
import Link from 'next/link'

const MENU_ARR = ['ホーム', 'ストア', 'マイリスト']

const MenuList = () => {
  return (
    <ul className="h-ful">
      <Flex align="center" className="h-full gap-10">
        {MENU_ARR.map((menu, idx) => (
          <li key={idx}>
            <Link href="/" className="text-white">
              {menu}
            </Link>
          </li>
        ))}
      </Flex>
    </ul>
  )
}

export default MenuList
