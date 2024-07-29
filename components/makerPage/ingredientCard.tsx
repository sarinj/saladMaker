import Image from 'next/image'
import { Button } from '../ui/button'
import MinusIcon from '../icons/minusIcon'
import PlusIcon from '../icons/plusIcon'

export default function IngredientCard() {
  return (
    <div className='flex h-[363px] w-[344px] flex-col gap-6 rounded-[16px] bg-white px-6 py-8'>
      <Image src='' width={296} height={180} alt='ingredient' />
      <div className='heading-3'>
        <p>Green Leaf</p>
        <p>
          8 <span className='text-yellow'>Cal</span>
        </p>
      </div>
      <div className='flex items-center justify-end gap-4'>
        <Button size='icon' variant='yellow'>
          <MinusIcon width='16' height='16' />
        </Button>
        <p className='heading-3'>2</p>
        <Button size='icon' variant='yellow'>
          <PlusIcon width='16' height='16' />
        </Button>
      </div>
    </div>
  )
}
