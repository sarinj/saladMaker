import SearchIcon from '../icons/searchIcon'
import { Input } from '../ui/input'

export default function SearchIngredient() {
  return (
    <Input
      className='h-[60px] w-[513px] rounded-[16px] py-2 pl-6 pr-8'
      inputClassName='regular-1'
      placeholder='Search ingredients to make a salad...'
      icon={<SearchIcon />}
    />
  )
}
