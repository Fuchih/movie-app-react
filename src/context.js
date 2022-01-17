import { useState, createContext } from 'react'

export const Context = createContext()

export default function UseProvider({ children }) {
  const [state, setState] = useState(undefined)

  return <Context.Provider value={[state, setState]}>{children}</Context.Provider>
}
