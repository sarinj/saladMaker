'use client'

import { createContext, ReactNode, useContext } from 'react'

interface SaladContextType {}

const SaladContext = createContext<SaladContextType>({})

export function SaladProvider({ children }: { children: ReactNode }) {
  const value = {}

  return <SaladContext.Provider value={value}>{children}</SaladContext.Provider>
}

function useSalad() {
  return useContext(SaladContext)
}

export { useSalad }
