'use client'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import Input from '../shared/Input'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'

const Login = () => {
  return (
    <Flex align="center" justify="center" direction="column">
      <Flex
        className="max-w-[280px] md:max-w-sm w-full"
        align="center"
        justify="center"
        direction="column"
      >
        <Spacing size={100} />
        <Text color="red" typography="t1" bold>
          BOOK PROJECT
        </Text>
        <Spacing size={60} />
        <Text typography="t3" bold>
          ログイン
        </Text>
        <Spacing size={30} />
        <Input
          placeholder="メールアドレスまたは携帯電話番号"
          className="text-center"
        />
        <Spacing size={20} />
        <Input placeholder="パスワード" className="text-center" />
        <Spacing size={40} />
        <Button color="error" className="w-full">
          ログイン
        </Button>
        <Spacing size={20} />
        <Text typography="t6" color="red" bold>
          パスコードをお忘れですか？
        </Text>
        <Spacing size={40} />
        <div className="border-b border-slate-400 w-full"></div>
        <Spacing size={40} />
        <Text color="red" typography="t6">
          初めてのご利用の方はこちら
        </Text>
        <Button
          color="error"
          className="w-full my-3"
          css={tw`bg-white border-primary text-primary font-bold`}
        >
          新規会員登録
        </Button>
      </Flex>
    </Flex>
  )
}

export default Login
