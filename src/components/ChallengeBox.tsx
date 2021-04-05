import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const contextData = useContext(ChallengesContext)

    //Parei no 41:39

    const hasActiveChallenge = true

    return(
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    
                    <main>
                        <img src="icons/body.svg" alt="corpo"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça um caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailButton}
                        >
                            Falhei
                        </button>
                        
                        <button
                            type="button"
                            className={styles.challengeSuccessedButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up"/>
                                Avance de level completando desafios
                        </p>
                </div>
            )}
        </div>
    )
}