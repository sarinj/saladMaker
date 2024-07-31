import RecipeList from './components/recipeList'

export default function RecipePage() {
  return (
    <div className='space-y-8 px-10 py-12'>
      <h1 className='heading-1'>Recipe</h1>
      <div className='space-y-10 rounded-[16px] bg-white px-6 py-10'>
        <h3 className='heading-3'>Your Recipe</h3>
        <RecipeList />
      </div>
    </div>
  )
}
