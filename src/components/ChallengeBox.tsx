import { useChallenges } from '../contexts/ChallengesContext'
import { useCountdown } from '../contexts/CountdownContext'
import { useTheme } from '../contexts/ThemeContext'

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { darkTheme } = useTheme()
    const { activeChallenge, resetChallenge, completeChallenge } = useChallenges()
    const { resetCountdown } = useCountdown()

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div
            className={
                !darkTheme
                    ? styles.containerLight
                    : styles.containerDark}
        >
            <div className={styles.challengeBoxContainer}>
                {activeChallenge ? (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="corpo" />
                            <strong className={!darkTheme ? styles.light : styles.dark}>
                                Novo desafio
                            </strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailButton}
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>

                            <button
                                type="button"
                                className={styles.challengeSuccessedButton}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>
                    </div>
                ) : (
                    <div className={styles.challengeNotActive}>
                        <strong className={!darkTheme ? styles.light : styles.dark}>
                            Finalize um ciclo para receber um desafio
                        </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}