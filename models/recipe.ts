import { Schema, model, models } from 'mongoose'

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalCalories: { type: Number, required: true },
})

const Recipe = models.Recipe || model('Recipe', recipeSchema)

export default Recipe
