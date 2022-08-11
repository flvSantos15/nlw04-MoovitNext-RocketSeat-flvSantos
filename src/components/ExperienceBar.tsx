import { useChallenges } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useChallenges()

    const percenteToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percenteToNextLevel}%` }} />

                <span className={styles.currentExperience} style={{ left: `${percenteToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}