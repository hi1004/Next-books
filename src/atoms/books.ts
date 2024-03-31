import { BookType } from '@/interface'
import { atom } from 'recoil'
export const recommendBooks = atom<BookType[]>({
  key: 'recommendBooks',
  default: [],
})
