'use client'

import useDebouncedCallback from '@/hooks/useDebouncedCallback'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
const SearchFilter = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('query', term)
    replace(`${pathname === '/' ? 'search' : pathname}?${params.toString()}`)
  }, 300)

  return (
    <form>
      <input
        type="search"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default SearchFilter
