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

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-1 flex h-[64px] w-[252px] items-center gap-x-6 rounded-[16px] px-6 py-4 text-[18px] font-medium',
        { 'bg-yellow text-white': href === currentPath },
        className
      )}
    >
      {icon}
      {title}
    </Link>
  )
}
