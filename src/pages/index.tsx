import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'

import Head from 'next/head'
import { Header } from '../components/Header'

import { CountdownProvider } from '../contexts/CountdownContext'
import { useTheme } from '../contexts/ThemeContext'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const { darkTheme } = useTheme()
  return (
    <div
      className={
        !darkTheme ?
          styles.containerDivLight
          : styles.containerDivDark}
    >
      <div className={!darkTheme ? styles.containerLight : styles.containerDark}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <Header />

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              {/* <Profile /> */}
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </div>
  )
}
