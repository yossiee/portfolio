import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Yoshimitsu Egashira" />
    <h1>Welcome to my website <span role="img" aria-label="tada">🎉</span></h1>
    <p>こんにちは。<br />まだ何もありません。これから React + Gatsby で作っていきます。</p>
    <br />
    <div style={{ maxWidth: `300px`, margin: `0 auto 1.45rem`, textAlign: `center ` }}>
      <Image filename="gatsby-astronaut.png" alt="default image" />
      <span>（サンプル画像です）</span>
    </div>
    <div style={{ width: `100%`, textAlign: `right` }}>
      <Link to="/about">このサイトについて</Link>
    </div>
  </Layout>
)

export default IndexPage
