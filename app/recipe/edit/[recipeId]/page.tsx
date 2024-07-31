export default function EditRecipePage({
  params,
}: {
  params: { recipeId: string }
}) {
  return <div>{params.recipeId}</div>
}
