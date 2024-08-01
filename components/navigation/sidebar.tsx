'use client'

import { usePathname } from 'next/navigation'
import { Menus } from './Menus'
import SideBarMenuItem from './SidebarMenuItem'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  const currentPath = usePathname()

  return (
    <div
      className={cn(
        'sticky flex w-fit flex-col items-center gap-y-[59px] bg-white px-[46px] py-14 lg:w-[345px]',
        { hidden: currentPath.startsWith('/api') }
      )}
    >
      <h2 className='hidden text-[30px] font-bold text-blue lg:block'>
        SALADMAKER<span className='text-yellow'>.</span>
      </h2>
      <div className='space-y-4'>
        {Menus.map(menu => (
          <SideBarMenuItem
            key={menu.href}
            icon={menu.icon}
            title={menu.title}
            href={menu.href}
          />
        ))}
      </div>
    </div>
  )
}
