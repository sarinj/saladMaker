'use client'

import { ReactNode } from 'react'
import CheckIcon from '../icons/checkIcon'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  title: string
  icon: ReactNode
  selected?: boolean
  onClick?: () => void
}

export default function CategoryCard({
  title,
  icon,
  selected = false,
  onClick,
}: CategoryCardProps) {
  function handleClick() {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        'relative flex size-40 cursor-pointer flex-col items-center gap-4 rounded-[16px] bg-white px-6 py-8',
        { 'drop-shadow-md': selected }
      )}
    >
      {selected && (
        <div className='bg-green absolute right-[8px] top-[8px] flex size-[21px] items-center justify-center rounded-full'>
          <CheckIcon width='12' height='9' />
        </div>
      )}
      {icon}
      <p className='text-gray-1 regular-1'>{title}</p>
    </div>
  )
}
