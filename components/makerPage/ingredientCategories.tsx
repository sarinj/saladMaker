import DressingIcon from '../icons/dressingIcon'
import FruitIcon from '../icons/fruitIcon'
import ProteinIcon from '../icons/proteinIcon'
import ToppingIcon from '../icons/toppingIcon'
import VegetableIcon from '../icons/vegetableIcon'

export type Category = {
  title: string
  icon: React.ReactNode
}

export const ingredientCategories: Category[] = [
  { title: 'Vegetables', icon: <VegetableIcon width='74' height='74' /> },
  { title: 'Fruit', icon: <FruitIcon width='74' height='74' /> },
  { title: 'Toppings', icon: <ToppingIcon width='74' height='74' /> },
  { title: 'Proteins', icon: <ProteinIcon width='74' height='74' /> },
  { title: 'Dressing', icon: <DressingIcon width='74' height='74' /> },
]
