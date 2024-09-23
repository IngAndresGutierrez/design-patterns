import React, {
  FC,
  useState,
  ReactNode,
  useContext,
  createContext,
} from "react"

interface AppContextProps {
  user: string | null
  setUser: (user: string) => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null)

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
