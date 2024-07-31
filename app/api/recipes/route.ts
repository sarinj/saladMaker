import connectMongoDB from '@/lib/mongodb'
import Recipe from '@/models/recipe'
import { HttpStatusCode } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, ingredients, totalCalories } = body

    await connectMongoDB()
    await Recipe.create({ name, ingredients, totalCalories })

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
