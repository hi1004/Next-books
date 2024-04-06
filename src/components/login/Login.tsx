'use client'
/** @jsxImportSource @emotion/react */
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import Input from '../shared/Input'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'
import TextField from '../shared/TextField'

const Login = () => {
  return (
    <section className="flex justify-center items-center">
      <Flex
        className="max-w-[280px] md:max-w-sm w-full"
        align="center"
        justify="center"
        direction="column"
      >
        <Spacing size={100} />
        <Text color="red" typography="t1" bold>
          BOOK&apos;s PROJECT
        </Text>
        <Spacing size={60} />
        <Text typography="t3" bold>
          ログイン
        </Text>
        <Spacing size={30} />
        <TextField placeholder="メールアドレスまたは携帯電話番号" />
        <Spacing size={20} />
        <TextField placeholder="パスワード" />
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
        <Button color="error" className="w-full my-3" outline>
          新規会員登録
        </Button>
      </Flex>
    </section>
  )
}

export default Login
