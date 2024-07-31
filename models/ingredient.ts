import { Schema, model, models } from 'mongoose'

const ingredientSchema = new Schema({
  ingredient: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, default: null },
  calories: { type: Number, required: true },
})

const Ingredient = models.Ingredient || model('Ingredient', ingredientSchema)

export default Ingredient
