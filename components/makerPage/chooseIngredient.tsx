'use client'

import IngredientCard from './ingredientCard'
import { useSalad } from '@/hooks/useSalad'

export default function ChooseIngredient() {
  const {
    ingredients,
    selectedIngredients,
    addIngredient,
    removeIngredient,
    isLoadingIngredients,
  } = useSalad()

  return (
    <div className='space-y-6'>
      <h3 className='heading-3'>Choose your ingredients to make a salad</h3>
      {isLoadingIngredients ? (
        <div className='min-h-[362px]'>
          <p>Loading...</p>
        </div>
      ) : ingredients?.length === 0 ? (
        <div className='min-h-[362px]'>
          <p>No ingredients found</p>
        </div>
      ) : (
        <div className='flex min-h-[362px] flex-wrap justify-start gap-6'>
          {ingredients.map(ing => (
            <IngredientCard
              key={ing.id}
              image={ing.image}
              label={ing.ingredient}
              calories={ing.calories}
              quantity={
                selectedIngredients.find(
                  selectedIng => selectedIng.id === ing.id
                )?.quantity || 0
              }
              onAdd={() => addIngredient(ing.id)}
              onRemove={() => removeIngredient(ing.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
