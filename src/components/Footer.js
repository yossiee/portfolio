import React from 'react'
import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.footer__signature}>
      ©{' '}
      <a
        href="https://twitter.com/yossiee_jp"
        rel="noreferrer noopener"
        target="_blank"
      >
        yossiee
      </a>{' '}
      - {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
