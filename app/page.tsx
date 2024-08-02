import ButtomMenu from '@/components/makerPage/bottomMenu'
import ChooseIngredient from '@/components/makerPage/chooseIngredient'
import SearchIngredient from '@/components/makerPage/searchIngredient'
import SelectCategories from '@/components/makerPage/selectCategories'
import { SaladProvider } from '@/hooks/useSalad'
import Image from 'next/image'

export default function SaladMakerPage() {
  return (
    <SaladProvider>
      <SaladMaker />
      <ButtomMenu />
    </SaladProvider>
  )
}

function SaladMaker() {
  return (
    <div className='px-10 py-12'>
      <div className='flex flex-col items-center justify-between gap-4 lg:flex-row'>
        <h1 className='heading-2 lg:heading-1'>
          Let&#39;s Create...your own salad!!!
        </h1>
        <SearchIngredient />
      </div>
      <div className='mt-8 space-y-[40px]'>
        <div className='relative h-[240px] gap-4 overflow-hidden rounded-[16px] bg-yellow-1 px-12 pb-[37px] pt-[43px] text-blue'>
          <h2 className='relative z-10 max-w-[203px] heading-2'>
            Fresh & tasty salads
          </h2>
          <p className='relative z-10 text-sm leading-6'>
            Relax please, we&#39;ve got you <br /> covered every day of the week
          </p>
          <div className='absolute -left-[34px] bottom-[-184px] size-[285px] rounded-full border-[48px] border-white opacity-25' />
          <div className='absolute left-[343px] top-[-166px] size-[285px] rounded-full border-[48px] border-white opacity-25' />
          <Image
            className='absolute left-[537px] top-[50px] rotate-[-127deg]'
            width={479}
            height={478}
            src='/salad-1.png'
            alt='salad'
          />
          <Image
            className='absolute bottom-0 left-[1000px]'
            width={451}
            height={439}
            src='/salad-2.png'
            alt='salad'
          />
        </div>
        <SelectCategories />
        <ChooseIngredient />
      </div>
    </div>
  )
}
