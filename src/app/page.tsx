import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Select, { Option } from '@/components/shared/Select'
import Skeleton from '@/components/shared/Skeleton'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import TextField from '@/components/shared/TextField'

export default function Home() {
  const arr = [
    { label: 'dadsa', value: 'df' },
    { label: 'da', value: 'df' },
  ] as Option[]
  return (
    <div>
      <div className="text-xl text-red-300">test4</div>
      <Text typography="t3" display="block" textAlign="center">
        ddf
      </Text>

      <Button color="success" full size="small">
        button
      </Button>
      <Input aria-invalid />

      {/* <Button.Group title="button group">
        <Button>안녕하세요</Button>
        <Button>안녕</Button>
      </Button.Group> */}
      <Skeleton width={100} height={30} />
      <Spacing size={30} direction="horizontal" backgroundColor="blue980" />
      <TextField label={<p>dasfas</p>} helpMessage="dd" />
      {/* <ListRow
        withArrow
        left={'dfsa'}
        contents={<ListRow.Texts title={'lorem'} subTitle={'hi'} />}
        right={<div>dsf</div>}
      /> */}
      <Select label="test" options={arr} placeholder="test" />
    </div>
  )
}
