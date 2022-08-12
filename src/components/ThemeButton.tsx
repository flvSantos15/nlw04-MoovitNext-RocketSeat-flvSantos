import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

import styles from '../styles/components/ThemeButton.module.css'

export function ThemeButton() {
  const { toggleThemeMode, darkTheme } = useTheme()
  return (
    <button
      type='button'
      className={styles.themeButton}
      onClick={() => toggleThemeMode()}
    >
      {!darkTheme ? (
        <FaMoon fontSize='1rem' color='#f5d210' />
      ) : (
        <FaSun fontSize='1rem' color='#f1ee0a' />
      )}
    </button>
  )
}