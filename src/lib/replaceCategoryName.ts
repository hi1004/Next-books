import { CATEGORY_ARR, newCategoryName } from '@/constants/category'

export function replaceCategoryName(categoryName: string) {
  let result = ''
  for (let i = 0; i < CATEGORY_ARR.length; i++) {
    if (categoryName === CATEGORY_ARR[i]) {
      result = newCategoryName[i]
    }
  }
  return result
}
