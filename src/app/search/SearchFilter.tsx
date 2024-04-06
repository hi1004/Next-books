'use client'

import Button from '@/components/shared/Button'
import Flex from '@/components/shared/Flex'
import Input from '@/components/shared/Input'
import useDebouncedCallback from '@/hooks/useDebouncedCallback'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
const SearchFilter = () => {
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState('')
  const { replace } = useRouter()
  const pathname = usePathname()
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('query', term)

    if (pathname === '/') {
      setSearchValue(term)
    } else {
      replace(`/search?${params.toString()}`)
      setSearchValue(term)
    }
  }, 300)
  console.log(searchValue)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('query', searchValue)
    if (searchValue) replace(`/search?${params.toString()}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <Input
          type="search"
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <Button color="success" type="submit">
          submit
        </Button>
      </Flex>
    </form>
  )
}

export default SearchFilter
