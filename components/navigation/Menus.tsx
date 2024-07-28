import MakerIcon from '../icons/makerIcon'
import RecipeIcon from '../icons/recipeIcon'
import { MenuItem } from './interface'

export const Menus: MenuItem[] = [
  {
    title: 'Salad Maker',
    href: '/',
    icon: <MakerIcon />,
  },
  {
    title: 'Recipe',
    href: '/recipe',
    icon: <RecipeIcon />,
  },
]
