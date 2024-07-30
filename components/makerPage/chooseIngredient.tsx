'use client'

import IngredientCard from './ingredientCard'
import { useSalad } from '@/hooks/useSalad'

export default function ChooseIngredient() {
  const {
    filteredIngredients,
    selectedIngredients,
    addIngredient,
    removeIngredient,
  } = useSalad()

  console.log(selectedIngredients)

  return (
    <div className='space-y-6'>
      <h3 className='heading-3'>Choose your ingredients to make a salad</h3>
      <div className='flex flex-wrap gap-6'>
        {filteredIngredients.map(ing => (
          <IngredientCard
            key={ing.id}
            image={ing.image}
            label={ing.ingredient}
            calories={ing.calories}
            quantity={
              selectedIngredients.find(selectedIng => selectedIng.id === ing.id)
                ?.quantity || 0
            }
            onAdd={() => addIngredient(ing.id)}
            onRemove={() => removeIngredient(ing.id)}
          />
        ))}
      </div>
    </div>
  )
}
