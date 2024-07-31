'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { request } from '@/lib/axiosClient'
import { useQuery } from '@tanstack/react-query'

type Ingredient = {
  id: string
  ingredient: string
  category: string
  image: string
  calories: number
}

type SelectedIngredientType = {
  id: string
  name: string
  calories: number
  quantity: number
}

type IngredientFiltersType = {
  search: string
  category: string[]
}

type NewRecipeType = {
  name: string
  ingredients: { id: string; quantity: number }[]
  totalCalories: number
}

interface SaladContextType {
  ingredients: Ingredient[]
  selectedIngredients: SelectedIngredientType[]
  totalCalories: number
  totalQuantity: number
  isLoadingIngredients: boolean
  addIngredient: (id: string) => void
  removeIngredient: (id: string) => void
  filters: IngredientFiltersType
  setIngredientFilters: (filters: IngredientFiltersType) => void
  createRecipe: (recipe: NewRecipeType) => Promise<void>
  clearSelectedIngredients: () => void
}

const SaladContext = createContext<SaladContextType>({
  ingredients: [],
  selectedIngredients: [],
  totalCalories: 0,
  totalQuantity: 0,
  isLoadingIngredients: false,
  addIngredient: () => {},
  removeIngredient: () => {},
  filters: { search: '', category: [] },
  setIngredientFilters: () => {},
  createRecipe: async () => {},
  clearSelectedIngredients: () => {},
})

export function SaladProvider({ children }: { children: ReactNode }) {
  const [selectedIngredients, setSelectedIngredients] = useState<
    SelectedIngredientType[]
  >([])
  const [filters, setFilters] = useState<IngredientFiltersType>({
    search: '',
    category: [],
  })

  const { data: ingredientsData, isLoading: isLoadingIngredients } = useQuery({
    queryKey: ['ingredients', filters],
    queryFn: async () => {
      const resp = await request.get('/api/ingredients', { params: filters })
      return resp.data
    },
  })

  const ingredients: Ingredient[] = useMemo(() => {
    const temp =
      ingredientsData?.ingredients?.map((ingredient: any) => {
        return {
          id: ingredient._id,
          ingredient: ingredient.ingredient,
          category: ingredient.category,
          image: ingredient.image ?? '',
          calories: ingredient.calories,
        }
      }) ?? []
    return temp
  }, [ingredientsData])

  function addIngredient(id: string) {
    const ingredient = selectedIngredients.find(
      selectedIngredient => selectedIngredient.id === id
    )

    if (ingredient) {
      setSelectedIngredients(
        selectedIngredients.map(selectedIngredient =>
          selectedIngredient.id === id
            ? {
                ...selectedIngredient,
                quantity: selectedIngredient.quantity + 1,
              }
            : selectedIngredient
        )
      )
    } else {
      const newIngredient = ingredients.find(ingredient => ingredient.id === id)

      if (newIngredient) {
        const temp: SelectedIngredientType = {
          id: newIngredient.id,
          name: newIngredient.ingredient,
          quantity: 1,
          calories: newIngredient.calories,
        }
        setSelectedIngredients([
          ...selectedIngredients,
          { ...temp, quantity: 1 },
        ])
      }
    }
  }

  function removeIngredient(id: string) {
    const ingredient = selectedIngredients.find(
      selectedIngredient => selectedIngredient.id === id
    )

    if (ingredient) {
      if (ingredient.quantity > 1) {
        setSelectedIngredients(
          selectedIngredients.map(selectedIngredient =>
            selectedIngredient.id === id
              ? {
                  ...selectedIngredient,
                  quantity: selectedIngredient.quantity - 1,
                }
              : selectedIngredient
          )
        )
      } else {
        setSelectedIngredients(
          selectedIngredients.filter(
            selectedIngredient => selectedIngredient.id !== id
          )
        )
      }
    }
  }

  function setIngredientFilters(filters: IngredientFiltersType) {
    setFilters(filters)
  }

  function clearSelectedIngredients() {
    setSelectedIngredients([])
  }

  async function createRecipe(recipe: NewRecipeType) {
    const resp = await request.post('api/recipes', recipe)
    return resp.data
  }

  const totalCalories = useMemo(
    () =>
      selectedIngredients.reduce(
        (acc, ingredient) => acc + ingredient.calories * ingredient.quantity,
        0
      ),
    [selectedIngredients]
  )

  const totalQuantity = useMemo(
    () =>
      selectedIngredients.reduce(
        (acc, ingredient) => acc + ingredient.quantity,
        0
      ),
    [selectedIngredients]
  )

  const value = {
    ingredients,
    filters,
    selectedIngredients,
    totalCalories,
    totalQuantity,
    isLoadingIngredients,
    addIngredient,
    removeIngredient,
    setIngredientFilters,
    clearSelectedIngredients,
    createRecipe,
  }

  return <SaladContext.Provider value={value}>{children}</SaladContext.Provider>
}

function useSalad() {
  return useContext(SaladContext)
}

export { useSalad }
