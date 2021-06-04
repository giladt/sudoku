import React from 'react'
import styles from './Footer.module.scss'

const Footer:React.FC = () => {
  return (
    <footer className={styles.container}>
      Made with 💙 by Gilad Tsabar
    </footer>
  )
}

export default Footer