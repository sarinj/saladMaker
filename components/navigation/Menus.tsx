import MakerIcon from '../icons/makerIcon'
import RecipeIcon from '../icons/recipeIcon'
import { MenuItem } from './interface'

export const Menus: MenuItem[] = [
  {
    title: 'Salad Maker',
    href: '/',
    icon: <MakerIcon width='28' height='28' />,
  },
  {
    title: 'Recipe',
    href: '/recipe',
    icon: <RecipeIcon width='25' height='25' />,
  },
]
