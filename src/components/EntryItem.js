import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './entryItem.module.scss'

const EntryItem = ({ slug, title, createdAt }) => (
  <li className={styles.item}>
    <Link to={`/entries/` + slug}>
      <small>{createdAt}</small>
      <h3>{title}</h3>
    </Link>
  </li>
)

export default EntryItem

EntryItem.propTypes = {
  slug: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

EntryItem.defaultProps = {
  slug: 0,
  title: ``,
  createdAt: ``
}
