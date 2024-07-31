'use client'

import { useSalad } from '@/hooks/useSalad'
import SearchIcon from '../icons/searchIcon'
import { Input } from '../ui/input'
import { useDebounce } from '@/hooks/useDebounce'

export default function SearchIngredient() {
  const { filters, setIngredientFilters } = useSalad()
  const { debounce } = useDebounce()

  return (
    <Input
      className='h-[60px] w-[513px] rounded-[16px] py-2 pl-6 pr-8'
      inputClassName='regular-1'
      placeholder='Search ingredients to make a salad...'
      onChange={e => {
        debounce(() => {
          setIngredientFilters({ ...filters, search: e.target.value })
        }, 500)
      }}
      icon={<SearchIcon />}
    />
  )
}
