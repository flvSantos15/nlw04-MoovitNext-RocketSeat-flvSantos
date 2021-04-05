import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown(){
    //uso o 25 porque a aplicação vai iniciar um ciclo de 25 minutos
    const [time, setTime] = useState(0.1 * 60)// 25 minutos em 60 segundos
    //estado para verificar se o contador esta rodando, no inicio vai estar parado, valor falso
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60) // calculo os minutos
    const seconds = time % 60// o resto da divisão do tempo por 60 serão os segundos

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')// converto os numeros em String
    const [secondleft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown(){
        setIsActive(true)
    }

    function stopCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.1 * 60)
    }

    //função para causar um efeito
    //sempre recebe o que eu quero fazer e uando eu quero fazer
    //nesse caso uero fazer uma ação sempre que o contador estiver ativo

    useEffect(() => {
        //se o contador estiver atico e o tempo for maior que 0, a cada 1 segundo tiro um segundo do tempo
        //criando assim a contagem de trás pra frente
        if(isActive && time > 0){
            //uso uma função nativa para a cada 1 segndo fazer uma ação
            //chamo a funcão setTime e tiro 1 dos segundos
            countdownTimeout = setTimeout(()=>{
                setTime(time - 1)
            }, 1000)
            //se chegou a zero, fazer outra ação
        } else if (isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondleft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled 
                    className={styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>
            ): (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonIsActive}`}
                            onClick={stopCountdown}
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