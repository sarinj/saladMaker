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
