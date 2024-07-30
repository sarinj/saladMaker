'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { DUMMY } from './dummyData'
import { request } from '@/lib/axiosClient'

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
  allIngredients: Ingredient[]
  filteredIngredients: Ingredient[]
  selectedIngredients: SelectedIngredientType[]
  totalCalories: number
  totalQuantity: number
  addIngredient: (id: string) => void
  removeIngredient: (id: string) => void
  filters: IngredientFiltersType
  setIngredientFilters: (filters: IngredientFiltersType) => void
  createRecipe: (recipe: NewRecipeType) => Promise<void>
  clearSelectedIngredients: () => void
}

const SaladContext = createContext<SaladContextType>({
  allIngredients: [],
  filteredIngredients: [],
  selectedIngredients: [],
  totalCalories: 0,
  totalQuantity: 0,
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

  const allIngredients: Ingredient[] = useMemo(() => {
    return DUMMY
  }, [])

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
      const newIngredient = allIngredients.find(
        ingredient => ingredient.id === id
      )

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
    const resp = await request.post('/recipes', recipe)
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

  const filteredIngredients = useMemo(() => {
    return allIngredients.filter(ingredient => {
      const searchMatch = ingredient.ingredient
        .toLowerCase()
        .includes(filters.search.toLowerCase())
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(ingredient.category)

      return searchMatch && categoryMatch
    })
  }, [allIngredients, filters])

  const value = {
    allIngredients,
    filters,
    filteredIngredients,
    selectedIngredients,
    totalCalories,
    totalQuantity,
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
