import React from 'react'
import styles from './Navbar.module.scss'

const Navbar:React.FC = () => {
  return (
    <nav className={styles.container}>
      <div>
        <figure>
          <img src="./carl-icon-32.png" alt="Carl" />
        </figure>
        <p>SUDOCarl</p>
      </div>
    </nav>
  )
}

export default Navbar
