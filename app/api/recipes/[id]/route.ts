import connectMongoDB from '@/lib/mongodb'
import Recipe from '@/models/recipe'
import { HttpStatusCode } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
  id: string
}

export async function DELETE(req: NextRequest, context: { params: Params }) {
  try {
    const id = context.params.id

    if (!id) {
      return NextResponse.json(
        { message: 'Recipe ID is required' },
        { status: HttpStatusCode.BadRequest }
      )
    }

    await connectMongoDB()
    await Recipe.findByIdAndDelete(id)

    return NextResponse.json(
      { message: 'Recipe deleted' },
      { status: HttpStatusCode.Ok }
    )
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message },
      { status: HttpStatusCode.InternalServerError }
    )
  }
}

export async function GET(req: NextRequest, context: { params: Params }) {
  try {
    const id = context.params.id

    if (!id) {
      return NextResponse.json(
        { message: 'Recipe ID is required' },
        { status: HttpStatusCode.BadRequest }
      )
    }

    await connectMongoDB()
    const recipe = await Recipe.findById(id)

    if (!recipe) {
      return NextResponse.json(
        { message: 'Recipe not found' },
        { status: HttpStatusCode.NotFound }
      )
    }

    return NextResponse.json({ recipe }, { status: HttpStatusCode.Ok })
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message },
      { status: HttpStatusCode.InternalServerError }
    )
  }
}

export async function PATCH(req: NextRequest, context: { params: Params }) {
  try {
    const id = context.params.id
    const body = await req.json()
    const { ingredients, totalCalories } = body

    if (!id) {
      return NextResponse.json(
        { message: 'Recipe ID is required' },
        { status: HttpStatusCode.BadRequest }
      )
    }

    if (!ingredients || !totalCalories) {
      return NextResponse.json(
        { message: 'Ingredients and total calories are required' },
        { status: HttpStatusCode.BadRequest }
      )
    }

    await connectMongoDB()
    const recipe = await Recipe.findByIdAndUpdate(
      id,
      { ingredients, totalCalories },
      { new: true }
    )

    return NextResponse.json({ recipe }, { status: HttpStatusCode.Ok })
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message },
      { status: HttpStatusCode.InternalServerError }
    )
  }
}
