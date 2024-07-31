'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import IngredientItem from './ingredientItem'
import { useRecipe } from '@/hooks/useRecipe'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

export type Ingredient = {
  id: string
  name: string
  image: string
  calories: number
  quantity: number
}

type Recipe = {
  id: string
  name: string
  ingredients: Ingredient[]
  totalCalories: number
}

export default function EditIngredients({ recipeId }: { recipeId: string }) {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const { getRecipe, updateRecipe } = useRecipe()
  const { toast } = useToast()
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['recipe', recipeId],
    queryFn: () => getRecipe(recipeId),
    enabled: !!recipeId,
  })

  const { mutate, isPending } = useMutation({
    mutationFn: ({ ingredients, totalCalories }: any) => {
      return updateRecipe(recipeId, ingredients, totalCalories)
    },
    onSuccess: () => {
      toast({
        title: 'Recipe has been updated.',
      })
      router.push('/recipe')
    },
    onError: () => {
      toast({
        title: 'Failed to update recipe.',
      })
    },
  })

  useEffect(() => {
    if (data) {
      setRecipe(data.recipe)
    }
  }, [data])

  const newTotalCalories = useMemo(() => {
    return recipe?.ingredients.reduce(
      (acc, ing) => acc + ing.calories * ing.quantity,
      0
    )
  }, [recipe?.ingredients])

  function handleDeleteIngredient(id: string) {
    setRecipe(prev => {
      if (!prev) return null

      return {
        ...prev,
        ingredients: prev.ingredients.filter(ing => ing.id !== id),
      }
    })
  }

  function handleUpdate() {
    const temp = {
      ingredients: recipe?.ingredients,
      totalCalories: newTotalCalories,
    }
    mutate(temp)
  }

  return (
    <>
      <h3 className='heading-3'>Your ingredients to make a salad Recipe</h3>
      <div className='space-y-4'>
        {recipe?.ingredients.map(ing => (
          <IngredientItem
            key={ing.id}
            {...ing}
            onDelete={() => handleDeleteIngredient(ing.id)}
          />
        ))}
      </div>
      <div className='border-gray-2 border-x-0 border-b-0 border-t' />
      <div className='flex items-center justify-between'>
        <p className='text-[18px] font-medium leading-[27px]'>Total Calorie</p>
        <p className='text-[24px] font-medium leading-[36px]'>
          {newTotalCalories}{' '}
          <span className='text-[24px] font-bold leading-[36px] text-yellow'>
            Cal
          </span>
        </p>
      </div>
      <Button
        isLoading={isPending}
        onClick={handleUpdate}
        variant='yellow'
        className='h-16 w-full p-4 text-white'
      >
        Update Recipe
      </Button>
    </>
  )
}
