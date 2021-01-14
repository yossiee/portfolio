import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import avatar from '../images/profile.png'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import EntryItem from '../components/EntryItem'
import Bio from '../components/Bio'

const IndexPage = ({ data }) => {
  const {
    latestEntries: { edges: entries }
  } = data

  return (
    <>
      <Layout>
        <SEO title="Yoshimitsu Egashira" />
        <section>
          <div
            style={{
              alignItems: `center`,
              display: `flex`,
              justifyContent: `space-around`,
              padding: `0 2rem 2rem`
            }}
          >
            <img alt="yossiee" src={avatar} className="profile" />
            <div>
              <p style={{ marginBottom: 10 }}>
                社会人 3 年目の Web エンジニア 25
                歳。バックエンドの設計・開発が得意ですが、最近はフロントエンドにも手を伸ばしています。インフラは
                AWS が好きです。
              </p>
              <Bio />
            </div>
          </div>
        </section>
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
