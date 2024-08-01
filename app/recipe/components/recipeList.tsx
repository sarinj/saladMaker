'use client'

import { useRecipe } from '@/hooks/useRecipe'
import RecipeCard from './recipeCard'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Recipe } from './interface'

export default function RecipeList() {
  const { getRecipes } = useRecipe()
  const { data, isLoading } = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes,
  })

  const recipes: Recipe[] = useMemo(() => data?.recipes ?? [], [data?.recipes])

  return (
    <div className='flex flex-wrap gap-6'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        recipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)
      )}
    </div>
  )
}
