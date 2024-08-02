'use client'

import BinIcon from '@/components/icons/binIcon'
import EditIcon from '@/components/icons/editIcon'
import { Button } from '@/components/ui/button'
import { Recipe } from './interface'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ConfirmDeleteModal from './confirmDeleteModal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRecipe } from '@/hooks/useRecipe'
import { useToast } from '@/components/ui/use-toast'

export default function RecipeCard({ id, name, totalCalories }: Recipe) {
  const [open, setOpen] = useState(false)
  const { deleteRecipe } = useRecipe()
  const { toast } = useToast()

  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: deleteRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] })
      toast({
        title: 'Recipe has been deleted',
      })
    },
    onError: () => {
      toast({
        title: 'Failed to delete recipe',
      })
    },
  })

  function handleDelete() {
    mutate(id)
  }

  return (
    <div className='relative grid h-[363px] w-[344px] grid-rows-2 gap-6 overflow-hidden rounded-[16px] bg-yellow p-6'>
      <div className='bg-red-2 absolute left-[-92px] top-[-46px] h-[238px] w-[250px] rounded-[50%] opacity-50' />
      <div className='bg-green-1 absolute left-[-35px] top-[156px] h-[260px] w-[220px] rounded-[50%] opacity-50' />
      <div className='z-[1] flex flex-col justify-center gap-[8px] rounded-[16px] bg-white p-4'>
        <p className='text-[18px] leading-[27px]'>{name}</p>
        <p className='heading-2'>
          {totalCalories} <span className='text-yellow'>Cal</span>
        </p>
      </div>
      <div className='grid h-full grid-cols-2 items-end gap-[10px]'>
        <Button
          onClick={() => setOpen(true)}
          className='z-[1] h-10 gap-[10px] rounded-[20px] text-red medium-1 hover:bg-red-1 hover:text-white'
        >
          <BinIcon width='20' height='20' />
          Delete
        </Button>
        <Button
          onClick={() => router.push(`/recipe/edit/${id}`)}
          className='z-[1] h-10 gap-[10px] rounded-[20px] medium-1'
        >
          <EditIcon />
          Edit
        </Button>
      </div>
      <ConfirmDeleteModal
        open={open}
        onOpenChange={setOpen}
        onConfirm={handleDelete}
        isLoading={isPending}
      />
    </div>
  )
}
