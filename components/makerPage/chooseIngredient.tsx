import IngredientCard from './ingredientCard'

export default function ChooseIngredient() {
  return (
    <div className='space-y-6'>
      <h3 className='heading-3'>Choose your ingredients to make a salad</h3>
      <div className='flex flex-wrap gap-6'>
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
      </div>
    </div>
  )
}
