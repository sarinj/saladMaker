import Image from 'next/image'
import { Button } from '../ui/button'
import MinusIcon from '../icons/minusIcon'
import PlusIcon from '../icons/plusIcon'
import { checkImage } from '@/lib/utils'

interface IngredientCardProps {
  image: string
  label: string
  calories: number
  quantity: number
  onAdd: () => void
  onRemove: () => void
}

export default function IngredientCard({
  image,
  label,
  calories,
  quantity,
  onAdd,
  onRemove,
}: IngredientCardProps) {
  return (
    <div className='h-[363px] w-[344px] rounded-[16px] bg-white px-6 py-8'>
      <Image
        src={checkImage(image)}
        width={296}
        height={180}
        alt='ingredient'
        className='h-[180px] w-[296px] object-cover'
      />
      <div className='mt-6 heading-3'>
        <p className='text-[18px] font-medium leading-[27px]'>{label}</p>
        <p>
          {calories} <span className='text-yellow'>Cal</span>
        </p>
        <div className='flex items-center justify-end gap-4'>
          {quantity > 0 && (
            <>
              <Button onClick={onRemove} size='icon' variant='yellow'>
                <MinusIcon width='16' height='16' />
              </Button>
              <p className='justify-center heading-3'>{quantity}</p>
            </>
          )}
          <Button onClick={onAdd} size='icon' variant='yellow'>
            <PlusIcon width='16' height='16' />
          </Button>
        </div>
      </div>
    </div>
  )
}
