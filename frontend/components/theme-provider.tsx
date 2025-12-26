"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}

interface ThemeContextType {
  theme: string | undefined
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function ThemeProviderWithContext({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, resolvedTheme } = React.useContext(React.createContext<any>(null)) || {
    theme: "light",
    setTheme: () => {},
    resolvedTheme: "light",
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme || "light", toggleTheme }}>{children}</ThemeContext.Provider>
  )
}
