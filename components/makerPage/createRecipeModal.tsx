import { Dialog, DialogContent } from '@/components/ui/dialog'
import MakerIcon from '../icons/makerIcon'
import { Button } from '../ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { useEffect } from 'react'

interface CreateRecipeModalProps {
  open: boolean
  isLoading?: boolean
  onOpenChange: (open: boolean) => void
  onCreate: (name: string) => void
}

export default function CreateRecipeModal({
  open,
  isLoading = false,
  onOpenChange,
  onCreate,
}: CreateRecipeModalProps) {
  const formSchema = z.object({
    name: z.string().min(1, { message: 'Recipe name is required' }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  function handleConfirm(data: z.infer<typeof formSchema>) {
    onCreate(data.name)
  }

  useEffect(() => {
    if (!open) {
      form.reset()
    }
  }, [open, form])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='min-w-[500px]'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleConfirm)}>
            <div className='flex flex-col items-center px-10 py-6'>
              <MakerIcon className='text-yellow' width='72' height='72' />
              <p className='text-[28px] font-bold'>Recipe Name</p>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <Input
                        className='h-10'
                        placeholder='input your recipe name.....'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-2 p-[16px_40px_24px_40px]'>
              <Button
                type='button'
                className='h-12 text-[16px]'
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                isLoading={isLoading}
                type='submit'
                variant='green'
                className='h-12 text-[16px]'
              >
                Create New Recipe
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
