import { useEffect } from 'react'
import { ThemeContext } from './useTheme'

export function ThemeProvider({ children }) {
  const theme = 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
