import { useCountdown } from '../contexts/CountdownContext'
import { useTheme } from '../contexts/ThemeContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const { darkTheme } = useTheme()
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useCountdown()

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')// converto os numeros em String
    const [secondleft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div
                    className={!darkTheme ? styles.boxNumberLight : styles.boxNumberDark}
                >
                    <span className={!darkTheme ? styles.light : styles.dark}>
                        {minuteLeft}
                    </span>
                    <span className={!darkTheme ? styles.light : styles.dark}>
                        {minuteRight}
                    </span>
                </div>
                <span className={!darkTheme ? styles.light : styles.dark}>:</span>
                <div
                    className={!darkTheme ? styles.boxNumberLight : styles.boxNumberDark}
                >
                    <span className={!darkTheme ? styles.light : styles.dark}>
                        {secondleft}
                    </span>
                    <span className={!darkTheme ? styles.light : styles.dark}>
                        {secondRight}
                    </span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonIsActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    )
}