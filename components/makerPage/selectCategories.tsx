'use client'

import { useSalad } from '@/hooks/useSalad'
import CategoryCard from './categoryCard'
import { ingredientCategories } from './ingredientCategories'

export default function SelectCategories() {
  const { filters, setIngredientFilters } = useSalad()

  function handleSelectCategory(category: string) {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category]

    setIngredientFilters({ ...filters, category: newCategories })
  }

  return (
    <div className='min-h-[220px] space-y-6'>
      <h3 className='gap-6 heading-3'>Select Category</h3>
      <div className='flex flex-wrap gap-6'>
        {ingredientCategories.map(category => (
          <CategoryCard
            key={category.title}
            title={category.title}
            icon={category.icon}
            onClick={() => handleSelectCategory(category.value)}
            selected={filters.category.includes(category.value)}
          />
        ))}
      </div>
    </div>
  )
}
