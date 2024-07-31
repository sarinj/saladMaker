import EditIngredients from './components/editIngredients'

export default function EditRecipePage({
  params,
}: {
  params: { recipeId: string }
}) {
  return (
    <div className='space-y-8 px-10 py-12'>
      <h1 className='heading-1'>Edit Recipe</h1>
      <div className='space-y-6 rounded-[16px] bg-white px-6 py-10'>
        <EditIngredients recipeId={params.recipeId} />
      </div>
    </div>
  )
}
