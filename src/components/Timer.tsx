import { useState } from 'react'
import { RiTimerFill } from 'react-icons/ri'

import styles from '../styles/components/Timer.module.css'
import { TimerModal } from './TimerModal'

export function Timer() {
  const [openTimerModal, setOpenTimerModal] = useState(false)
  return (
    <>
      <button
        type='button'
        className={styles.timerButton}
        onClick={() => setOpenTimerModal(true)}
      >
        <RiTimerFill />
      </button>
      <TimerModal
        isOpenModal={openTimerModal}
        onCloseModal={() => setOpenTimerModal(false)}
      />
    </>
  )
}