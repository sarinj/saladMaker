import { Button } from '../ui/button'

export default function ButtomMenu() {
  return (
    <div className='sticky bottom-0 flex gap-[10px] bg-white px-8 py-6'>
      <div className='flex w-full items-center justify-between rounded-[16px] bg-yellow px-8 py-4 text-white'>
        <div className='flex items-center space-x-4 text-[32px] font-bold leading-[48px]'>
          <p className='rounded-[16px] bg-white px-6 py-2 text-yellow'>3</p>
          <p>Your Ingredients</p>
        </div>
        <p className='text-[32px] font-bold leading-[48px]'>76 Cal</p>
      </div>
      <div>
        <Button
          className='h-full rounded-[16px] px-8 py-4 text-[32px] font-bold leading-[48px]'
          variant='green'
        >
          Create Recipe
        </Button>
      </div>
    </div>
  )
}
