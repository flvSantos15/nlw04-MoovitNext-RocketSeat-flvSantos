import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface ThemeContextData {
  darkTheme: boolean
  toggleThemeMode: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light')
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark')
      setTheme('dark')
      setDarkTheme(true)
    } else {
      document.querySelector('html').classList.remove('dark')
      setTheme('light')
      setDarkTheme(false)
    }
  }, [])

  function toggleThemeMode() {
    if (
      !localStorage.getItem('theme') ||
      localStorage.getItem('theme') === 'light'
    ) {
      localStorage.theme = 'dark'
      document.querySelector('html').classList.add('dark')
      setTheme('dark')
      setDarkTheme(true)
    } else {
      localStorage.theme = 'light'
      document.querySelector('html').classList.remove('dark')
      setTheme('light')
      setDarkTheme(false)
    }
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}