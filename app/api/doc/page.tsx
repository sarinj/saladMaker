import { swaggerSpec } from '@/lib/swagger'
import dynamic from 'next/dynamic'

const ReactSwagger = dynamic(() => import('./reactSwagger'), { ssr: false })

export default async function Page() {
  return (
    <div>
      <ReactSwagger spec={swaggerSpec} />
    </div>
  )
}
