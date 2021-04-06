import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean
    isActive: boolean
    startCountdown: () => void
    resetCountdown: () => void
}

interface CountdownProviderProps{
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({children}: CountdownProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext)

    //uso o 25 porque a aplicação vai iniciar um ciclo de 25 minutos
    const [time, setTime] = useState(0.1 * 60)// 25 minutos em 60 segundos
    //estado para verificar se o contador esta rodando, no inicio vai estar parado, valor falso
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60) // calculo os minutos
    const seconds = time % 60// o resto da divisão do tempo por 60 serão os segundos

    function startCountdown(){
        setIsActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.1 * 60)
        setHasFinished(false)
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
            startNewChallenge()
        }
    }, [isActive, time])

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}