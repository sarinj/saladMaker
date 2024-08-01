import { Button } from '@/components/ui/button'
import { checkImage } from '@/lib/utils'
import Image from 'next/image'

interface IngredientItemProps {
  image: string
  name: string
  calories: number
  quantity: number
  onDelete: () => void
  onIncrese: () => void
  onDecrease: () => void
}

export default function IngredientItem({
  image,
  name,
  calories,
  quantity,
  onDelete,
  onIncrese,
  onDecrease,
}: IngredientItemProps) {
  const sumCalories = calories * quantity
  return (
    <div className='flex gap-6'>
      <Image
        src={checkImage(image)}
        width={80}
        height={80}
        alt='ingredient'
        className='size-[80px] object-cover object-center'
      />
      <div className='flex w-full items-center justify-between'>
        <div>
          <p className='text-[18px] font-semibold leading-[27px]'>{name}</p>
          <div className='flex items-center gap-4'>
            <div className='flex min-w-[80px] items-center justify-between gap-2'>
              <Button
                variant='yellow'
                size='icon'
                className='size-[18px] text-white'
                onClick={onDecrease}
              >
                -
              </Button>
              <p className='text-sm text-gray-1'>x{quantity}</p>
              <Button
                variant='yellow'
                size='icon'
                className='size-[18px] text-white'
                onClick={onIncrese}
              >
                +
              </Button>
            </div>
            <div
              onClick={onDelete}
              className='cursor-pointer text-sm text-red underline'
            >
              Delete
            </div>
          </div>
        </div>
        <div className='flex items-center gap-[10px] text-[18px] font-semibold'>
          <p>+{sumCalories}</p>
          <p className='text-yellow'>Cal</p>
        </div>
      </div>
    </div>
  )
}
