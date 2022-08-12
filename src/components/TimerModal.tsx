import { useEffect, useState } from 'react'
import styles from '../styles/components/TimerModal.module.css'

interface TimerModalProps {
  isOpenModal: boolean
  onCloseModal: () => void
}

export function TimerModal({ isOpenModal, onCloseModal }: TimerModalProps) {
  const [time, setTime] = useState('')
  const [buttonDisable, setButtonDisable] = useState(false)

  useEffect(() => {
    if (
      Number(time) <= 0 ||
      !time.length
    ) {
      console.log('não permitido')
      setButtonDisable(true)
    } else {
      const timeS = time.replace(',', '.')
      const tes = timeS.split('.')
      // if (tes.length > 1) {
      console.log(tes)
      // console.log('não')
      // }
      // console.log(time.replace(/\D+/g, ''))
      setButtonDisable(false)
    }
  }, [time])

  function Apply() {
    console.log(time)
  }

  if (isOpenModal) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.content}>
            <header>Você pode escolher seu tempo de foco</header>
            <main>
              <h4>Por favor, Digite apenas os minutos!</h4>
              <input
                id="time"
                name="time"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <p>
                *Se nenhum valor for passado o tempo padrão de 25 minutos será contado.
              </p>
            </main>
            <footer>
              <button
                type='button'
                onClick={() => onCloseModal()}
              >
                Cancel
              </button>
              <button
                type='button'
                disabled={buttonDisable}
                onClick={() => Apply()}
              >
                Apply
              </button>
            </footer>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
  return null
}