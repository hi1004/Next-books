/** @jsxImportSource @emotion/react */
'use client' //testStyles、css、tw、jsxと一緒に使うとき
import tw from 'twin.macro'

export default function Home() {
  return (
    <main>
      <Test>test</Test>
      <h1 css={[testStyles, tw`font-bold text-yellow-100`]}>test1</h1>
      <div tw="text-3xl">test2</div>
      <div css={tw`text-2xl`}>test3</div>
      <div className="text-xl text-red-300">test4</div>
    </main>
  )
}

const Test = tw.div`bg-blue-400 text-4xl`
const testStyles = tw`text-5xl font-bold bg-green-200`
