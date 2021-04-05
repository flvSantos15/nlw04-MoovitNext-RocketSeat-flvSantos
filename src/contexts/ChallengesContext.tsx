import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void
}

interface ChallendesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallendesProviderProps){
    const [ level, setLevel ] = useState(1) //nivel inicial
    const [currentExperience, setCurrentExperience] = useState(0) //experiencia atual
    const [challengesCompleted, setChallengesCompleted] = useState(0) //desafios completos

    const [ activeChallenge, setActiveChallenge ] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    
    function levelUp(){
        setLevel(level + 1)
    }
    
    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    //dentro do return, retorno todas as funções criadas e digo qual a tipagem delas em interface
    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currentExperience,
                experienceToNextLevel, 
                challengesCompleted, 
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
            }}
        >
            { children }
        </ChallengesContext.Provider>
    )
}