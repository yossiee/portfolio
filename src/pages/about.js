import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="Profile" />
    <h1>About Me</h1>
    <p>このサイトについてのことや私のプロフィールについて書きます。</p>
    <br />
    <Link to="/">ホームに戻る</Link>
  </Layout>
)

export default AboutPage
