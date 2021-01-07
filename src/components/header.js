import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Emoji from "../images/favicon.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3c4c6c`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          alignItem: `center`,
          color: `white`,
          display: `flex`,
          fontWeight: 500,
          textDecoration: `none`,
          whiteSpace: `nowrap`,
        }}
      >
        <img
          alt="emoji"
          style={{ height: `26px`, width: `26px`, margin: `0 0.5rem 0 0` }}
          src={Emoji}
        />
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
