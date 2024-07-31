import Image from 'next/image'

interface IngredientItemProps {
  image: string
  name: string
  calories: number
  quantity: number
  onDelete: () => void
}

export default function IngredientItem({
  image = 'https://s3-alpha-sig.figma.com/img/07eb/a428/821393b9bce3bf28b8c67b414de0e7f8?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXQB2ZPYeqRuUOqA2nzWgf2kN8lIhIGJ3O5yw5pnSJmpF50SSRHcm~TO1jP~2MWc7pmG5Vs5GT0NxnE00pR5m~n064RZlwZj1sVtbawmqQDEFeMBDfkd1ikiAHZCqLtM4Gl895k8RyRir6FcXjWt62kBxBcWZItNw07A4pzSYfFXDFvr1SwqwsIgdUD5nCptaH75nRwo7aduOAiHsWnF4Yqt0ejFPRbJxQWzqNE3cfwDGVSTrKIUQzsuSr0u63Ghr202UJlMea4wiJMDcAgA25SpSa1FSMbeJXzB5lY38XCE9qW77A0oDvSdV7zpaJecbnEZUMGyIklMDJ3eszNk7w__',
  name,
  calories,
  quantity,
  onDelete,
}: IngredientItemProps) {
  const sumCalories = calories * quantity
  return (
    <div className='flex gap-6'>
      <Image
        src={image}
        width={80}
        height={80}
        alt='ingredient'
        className='h-[80px] w-[80px] object-cover'
      />
      <div className='flex w-full items-center justify-between'>
        <div>
          <p className='text-[18px] font-semibold leading-[27px]'>{name}</p>
          <div className='flex gap-4'>
            <p className='text-sm text-gray-1'>x{quantity}</p>
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
