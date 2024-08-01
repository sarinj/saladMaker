'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBarMenuItem({
  title,
  icon,
  href,
  className,
}: {
  title: React.ReactNode
  icon: React.ReactNode
  href: string
  className?: string
}) {
  const currentPath = usePathname()
  const isCurrent = currentPath.split('/')[1] === href.split('/')[1]

  return (
    <Link
      href={href}
      className={cn(
        'flex h-[64px] w-fit items-center gap-x-6 rounded-[16px] px-6 py-4 text-[18px] font-medium text-gray-1 lg:w-[252px]',
        { 'bg-yellow text-white': isCurrent },
        className
      )}
    >
      {icon}
      <p className='hidden lg:flex'>{title}</p>
    </Link>
  )
}
