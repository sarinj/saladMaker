import ButtomMenu from '@/components/makerPage/bottomMenu'
import ChooseIngredient from '@/components/makerPage/chooseIngredient'
import SearchIngredient from '@/components/makerPage/searchIngredient'
import SelectCategories from '@/components/makerPage/selectCategories'
import { SaladProvider } from '@/hooks/useSalad'

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
        <div className='h-[240px] gap-4 rounded-[16px] bg-yellow-1 px-12 pb-[37px] pt-[43px] text-blue'>
          <h2 className='max-w-[203px] heading-2'>Fresh & tasty salads</h2>
          <p className='text-sm leading-6'>
            Relax please, we&#39;ve got you <br /> covered every day of the week
          </p>
        </div>
        <SelectCategories />
        <ChooseIngredient />
      </div>
    </div>
  )
}
