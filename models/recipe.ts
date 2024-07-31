import { Schema, model, models } from 'mongoose'

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    ingredients: [
      {
        _id: false,
        id: {
          type: Schema.Types.ObjectId,
          ref: 'Ingredient',
          required: true,
        },
        name: { type: String, required: true },
        image: { type: String, required: true },
        calories: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalCalories: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const Recipe = models.Recipe || model('Recipe', recipeSchema)

export default Recipe
