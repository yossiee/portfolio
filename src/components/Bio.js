import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import styles from './bio.module.scss'

const Bio = () => (
  <div className={styles.bio}>
    <a
      href="https://facebook.com/egashira.yoshimitsu"
      rel="noreferrer noopener"
      target="_blank"
    >
      <FontAwesomeIcon
        className={styles.facebook}
        icon={faFacebook}
        size="lg"
      />
    </a>
    <a
      href="https://github.com/yossiee"
      rel="noreferrer noopener"
      target="_blank"
    >
      <FontAwesomeIcon className={styles.github} icon={faGithub} size="lg" />
    </a>
    <a
      href="https://www.linkedin.com/in/yossiee"
      rel="noreferrer noopener"
      target="_blank"
    >
      <FontAwesomeIcon
        className={styles.linkedin}
        icon={faLinkedin}
        size="lg"
      />
    </a>
    <a
      href="https://twitter.com/yossiee_jp"
      rel="noreferrer noopener"
      target="_blank"
    >
      <FontAwesomeIcon className={styles.twitter} icon={faTwitter} size="lg" />
    </a>
  </div>
)

export default Bio
