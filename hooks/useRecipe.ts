import { request } from '@/lib/axiosClient'

type Ingredient = {
  id: string
  name: string
  image: string
  calories: number
  quantity: number
}

type NewRecipeType = {
  name: string
  ingredients: Ingredient[]
  totalCalories: number
}

export function useRecipe() {
  async function createRecipe(recipe: NewRecipeType) {
    const resp = await request.post('api/recipes', recipe)
    return resp.data
  }

  async function getRecipes() {
    const resp = await request.get('api/recipes')
    return resp.data
  }

  async function getRecipe(id: string) {
    const resp = await request.get(`api/recipes/${id}`)
    return resp.data
  }

  async function updateRecipe(
    id: string,
    ingredients: Ingredient[],
    totalCalories: number
  ) {
    const temp = {
      ingredients,
      totalCalories,
    }
    const resp = await request.patch(`api/recipes/${id}`, temp)
    return resp.data
  }

  async function deleteRecipe(id: string) {
    const resp = await request.delete(`api/recipes/${id}`)
    return resp.data
  }

  return { createRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe }
}
