import { Menus } from './Menus'
import SideBarMenuItem from './NavBarMenuItem'

export default function Sidebar() {
  return (
    <div className='flex w-[345px] flex-col items-center gap-y-[59px] bg-white px-[46px] py-14'>
      <h2 className='text-blue text-[30px] font-bold'>
        SALADMAKER<span className='text-yellow'>.</span>
      </h2>
      <div>
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
