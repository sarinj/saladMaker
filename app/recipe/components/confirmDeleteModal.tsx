import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import WarnIcon from '@/components/icons/warnIcon'

interface confirmDeleteModalProps {
  open: boolean
  isLoading?: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export default function ConfirmDeleteModal({
  open,
  isLoading = false,
  onOpenChange,
  onConfirm,
}: confirmDeleteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='min-w-[500px]'>
        <div className='flex flex-col items-center gap-4 px-10 py-6'>
          <WarnIcon className='text-red-1' width='72' height='72' />
          <p className='text-[28px] font-bold'>Delete Recipe</p>
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
            onClick={onConfirm}
            type='submit'
            variant='destructive'
            className='h-12 text-[16px]'
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
