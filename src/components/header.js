import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Emoji from "../images/favicon.png"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={ styles.header }>
    <div className={ styles.header__wrapper }>
      <Link to="/" className={ styles.header__wrapper__logo }>
        <img alt="emoji" src={Emoji} />
        {siteTitle}
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
