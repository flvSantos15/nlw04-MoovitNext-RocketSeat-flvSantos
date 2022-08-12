import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
// import { signIn, signOut, useSession } from 'next-auth/react'

import styles from '../styles/components/SignInButton.module.css'

export function SignInButton() {
  const [userConnected, setUserConnected] = useState(false)
  // const { data: session } = useSession()

  function connect() {
    setUserConnected(!userConnected)
  }

  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => connect()}
    >
      <FaGithub color={userConnected ? '#4cd62b' : '#fff'} />
    </button>
  )
  // return session ? (
  //   <button
  //     // onClick={() => signOut()}
  //   >
  //     <FaGithub color="#04d361" />
  //     Flavio Santos
  //     {/* {session.user.name} */}
  //   </button>
  // ) : (
  //   <button
  //     // onClick={() => signIn('github')}
  //   >
  //     <FaGithub color="#eba417" />
  //   </button>
  // )
}