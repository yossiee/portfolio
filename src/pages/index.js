import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import EntryItem from '../components/EntryItem'

const IndexPage = ({ data }) => {
  const {
    latestEntries: { edges: entries }
  } = data

  return (
    <>
      <Layout>
        <SEO title="Yoshimitsu Egashira" />
        <h1>
          Welcome to my website{' '}
          <span role="img" aria-label="tada">
            🎉
          </span>
        </h1>
        <p>
          こんにちは。
          <br />
          まだ何もありません。これから React + Gatsby で作っていきます。
        </p>
        <br />
        <div
          style={{
            maxWidth: `300px`,
            margin: `0 auto 1.45rem`,
            textAlign: `center `
          }}
        >
          <Image filename="gatsby-astronaut.png" alt="default image" />
          <span>（サンプル画像です）</span>
        </div>
        <div style={{ width: `100%`, textAlign: `right` }}>
          <Link to="/about">このサイトについて</Link>
        </div>
        <section>
          <h2>最新のエントリー</h2>
          <ul>
            {entries.map(({ node }) => {
              const { id, slug, title, createdAt } = node

              return (
                <EntryItem
                  key={id}
                  slug={slug}
                  title={title}
                  createdAt={createdAt}
                />
              )
            })}
          </ul>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    latestEntries: allMicrocmsEntries(
      limit: 5
      sort: { order: DESC, fields: createdAt }
    ) {
      edges {
        node {
          createdAt(formatString: "YYYY-MM-DD")
          id
          slug
          title
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

IndexPage.defaultProps = {
  data: null
}

export default IndexPage
