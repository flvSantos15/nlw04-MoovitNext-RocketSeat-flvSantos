import styles from '../styles/components/Header.module.css'
import { SignInButton } from './SignInButton'

import { useTheme } from '../contexts/ThemeContext'
import { ThemeButton } from './ThemeButton'
import { Timer } from './Timer'

export function Header() {
  const { darkTheme } = useTheme()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="logo-full.svg" alt="Logo" />
        <div className={styles.headerContentProfile}>
          <div className={styles.profileContainer}>
            <img src="https://github.com/flvSantos15.png" alt="Flavio Santos" />
            <div>
              {/* <strong>Seu Nome Aqui</strong> */}
              <strong className={!darkTheme ? styles.light : styles.dark}>
                Flavio Santos
              </strong>
              <p>
                <img src="icons/level.svg" alt="Level" />
                Level 1
              </p>
            </div>
          </div>
          <SignInButton />
          <Timer />
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}