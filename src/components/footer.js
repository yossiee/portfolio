import React from "react"

const Footer = () => (
  <footer
    style={{
      padding: `2rem`,
      textAlign: `center`,
    }}
  >
    <p style={{ fontSize: `0.8rem`, margin: 0 }}>
      ©{" "}
      <a
        href="https://twitter.com/yossiee_jp"
        style={{ textDecoration: `none` }}
        rel="noreferrer noopener"
        target="_blank"
      >
        yossiee
      </a>{" "}
      - {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
