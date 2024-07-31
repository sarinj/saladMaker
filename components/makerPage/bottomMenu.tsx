'use client'

import { useSalad } from '@/hooks/useSalad'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import CreateRecipeModal from './createRecipeModal'
import { useMutation } from '@tanstack/react-query'
import { useToast } from '../ui/use-toast'
import { useRecipe } from '@/hooks/useRecipe'

export default function ButtomMenu() {
  const {
    totalQuantity,
    totalCalories,
    selectedIngredients,
    clearSelectedIngredients,
  } = useSalad()
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const { createRecipe } = useRecipe()

  function handleCreateRecipe(name: string) {
    const recipe = {
      name,
      ingredients: selectedIngredients.map(ingredient => ({
        id: ingredient.id,
        quantity: ingredient.quantity,
      })),
      totalCalories,
    }
    mutate(recipe)
  }

  const { mutate, isPending } = useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      toast({
        title: 'Recipe has been created.',
      })
      clearSelectedIngredients()
      setOpen(false)
    },
    onError: () => {
      toast({
        title: 'Failed to create recipe.',
      })
    },
  })

  return (
    <div
      className={cn('sticky bottom-0 flex gap-[10px] bg-white px-8 py-6', {
        hidden: totalQuantity === 0,
      })}
    >
      <div className='flex w-full items-center justify-between rounded-[16px] bg-yellow px-8 py-4 text-white'>
        <div className='flex items-center space-x-4 text-[32px] font-bold leading-[48px]'>
          <p className='rounded-[16px] bg-white px-6 py-2 text-yellow'>
            {totalQuantity}
          </p>
          <p>Your Ingredients</p>
        </div>
        <p className='text-[32px] font-bold leading-[48px]'>
          {totalCalories} Cal
        </p>
      </div>
      <div>
        <Button
          onClick={() => setOpen(true)}
          className='h-full rounded-[16px] px-8 py-4 text-[32px] font-bold leading-[48px]'
          variant='green'
        >
          Create Recipe
        </Button>
      </div>
      <CreateRecipeModal
        isLoading={isPending}
        onOpenChange={setOpen}
        open={open}
        onCreate={handleCreateRecipe}
      />
    </div>
  )
}
