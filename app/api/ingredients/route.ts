import connectMongoDB from '@/lib/mongodb'
import { HttpStatusCode } from 'axios'
import Ingredient from '@/models/ingredient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const search = searchParams.get('search') ?? ''
  const category = searchParams.getAll('category[]')

  try {
    await connectMongoDB()

    const query: any = {
      ingredient: { $regex: search, $options: 'i' },
    }

    if (category.length > 0) {
      query.category = { $in: category }
    }

    const ingredients = await Ingredient.find(query)

    return NextResponse.json({ ingredients }, { status: HttpStatusCode.Ok })
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message },
      { status: HttpStatusCode.InternalServerError }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { ingredients } = body

    if (!Array.isArray(ingredients)) {
      return NextResponse.json(
        { message: 'Ingredients should be an array' },
        { status: HttpStatusCode.BadRequest }
      )
    }

    await connectMongoDB()
    await Ingredient.insertMany(ingredients)

    return NextResponse.json(
      { message: 'Ingredients created' },
      { status: HttpStatusCode.Created }
    )
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message },
      { status: HttpStatusCode.InternalServerError }
    )
  }
}
