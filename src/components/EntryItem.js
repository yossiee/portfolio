import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './entryItem.module.scss'

const EntryItem = ({ id, title, createdAt }) => (
  <li className={styles.item}>
    <Link to={`/entries/` + id}>
      <small>{createdAt}</small>
      <h3>{title}</h3>
    </Link>
  </li>
)

export default EntryItem

EntryItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

EntryItem.defaultProps = {
  id: ``,
  title: ``,
  createdAt: ``
}
