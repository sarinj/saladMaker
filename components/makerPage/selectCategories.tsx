import CategoryCard from './categoryCard'
import { ingredientCategories } from './ingredientCategories'

export default function SelectCategories() {
  return (
    <div className='min-h-[220px] space-y-6'>
      <h3 className='gap-6 heading-3'>Select Category</h3>
      <div className='flex flex-wrap gap-6'>
        {ingredientCategories.map(category => (
          <CategoryCard
            key={category.title}
            title={category.title}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  )
}
