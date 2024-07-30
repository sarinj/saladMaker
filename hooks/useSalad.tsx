'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { DUMMY } from './dummyData'

type Ingredient = {
  id: string
  ingredient: string
  category: string
  image: string
  calories: number
}

type selectedIngredientType = {
  id: string
  category: string
  calories: number
  quantity: number
}

type ingredientFilters = {
  search: string
  category: string[]
}

interface SaladContextType {
  allIngredients: Ingredient[]
  filteredIngredients: Ingredient[]
  selectedIngredients: selectedIngredientType[]
  totalCalories: number
  totalQuantity: number
  addIngredient: (id: string) => void
  removeIngredient: (id: string) => void
  filters: ingredientFilters
  setIngredientFilters: (filters: ingredientFilters) => void
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
})

export function SaladProvider({ children }: { children: ReactNode }) {
  const [selectedIngredients, setSelectedIngredients] = useState<
    selectedIngredientType[]
  >([])
  const [filters, setFilters] = useState<ingredientFilters>({
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
        setSelectedIngredients([
          ...selectedIngredients,
          { ...newIngredient, quantity: 1 },
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

  function setIngredientFilters(filters: ingredientFilters) {
    setFilters(filters)
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
  }

  return <SaladContext.Provider value={value}>{children}</SaladContext.Provider>
}

function useSalad() {
  return useContext(SaladContext)
}

export { useSalad }
