import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { ThemeProvider } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChallengesProvider>
  )
}

export default MyApp
