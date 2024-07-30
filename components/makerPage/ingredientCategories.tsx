import DressingIcon from '../icons/dressingIcon'
import FruitIcon from '../icons/fruitIcon'
import ProteinIcon from '../icons/proteinIcon'
import ToppingIcon from '../icons/toppingIcon'
import VegetableIcon from '../icons/vegetableIcon'

export type Category = {
  title: string
  value: string
  icon: React.ReactNode
}

export const ingredientCategories: Category[] = [
  {
    title: 'Vegetables',
    value: 'vegetable',
    icon: <VegetableIcon width='74' height='74' />,
  },
  {
    title: 'Fruit',
    value: 'fruit',
    icon: <FruitIcon width='74' height='74' />,
  },
  {
    title: 'Toppings',
    value: 'toppings',
    icon: <ToppingIcon width='74' height='74' />,
  },
  {
    title: 'Proteins',
    value: 'protein',
    icon: <ProteinIcon width='74' height='74' />,
  },
  {
    title: 'Dressing',
    value: 'dressing',
    icon: <DressingIcon width='74' height='74' />,
  },
]
