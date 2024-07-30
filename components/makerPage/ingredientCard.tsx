import Image from 'next/image'
import { Button } from '../ui/button'
import MinusIcon from '../icons/minusIcon'
import PlusIcon from '../icons/plusIcon'

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
    <div className='flex h-[363px] w-[344px] flex-col gap-6 rounded-[16px] bg-white px-6 py-8'>
      <Image src={image} width={296} height={180} alt='ingredient' />
      <div className='heading-3'>
        <p>{label}</p>
        <p>
          {calories} <span className='text-yellow'>Cal</span>
        </p>
      </div>
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
  )
}
