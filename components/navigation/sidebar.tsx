import { Menus } from './Menus'
import SideBarMenuItem from './SidebarMenuItem'

export default function Sidebar() {
  return (
    <div className='sticky flex w-[345px] flex-col items-center gap-y-[59px] bg-white px-[46px] py-14'>
      <h2 className='text-[30px] font-bold text-blue'>
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
