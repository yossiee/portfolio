import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import avatar from '../images/profile.png'

import Layout from '../components/layout'
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
        <div
          style={{
            display: `flex`,
            justifyContent: `space-around`,
            marginBottom: `3rem`
          }}
        >
          <img alt="yossiee" src={avatar} className="profile" />
          <div>
            <h4>こんにちは</h4>
            <p>
              こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは
            </p>
          </div>
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
