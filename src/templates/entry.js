import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const EntryDetail = ({ data }) => {
  const {
    entryDetail: { body, id, slug, title, createdAt }
  } = data

  return (
    <>
      <Layout>
        <SEO title={title} />
        <h2>{title}</h2>

        <section>
          <h3>エントリー情報</h3>

          <table>
            <tr>
              <td>投稿日</td>
              <td>{createdAt}</td>
            </tr>
            <tr>
              <td>エントリーNo.</td>
              <td>{slug}</td>
            </tr>
            <tr>
              <td>エントリーID.</td>
              <td>{id}</td>
            </tr>
          </table>
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    entryDetail: microcmsEntries(id: { eq: $id }) {
      body
      createdAt(formatString: "YYYY-MM-DD")
      id
      slug
      title
    }
  }
`

EntryDetail.propTypes = {
  data: PropTypes.object
}

EntryDetail.defaultProps = {
  data: {
    entryDetail: {
      body: ``,
      createdAt: ``,
      id: ``,
      slug: null,
      title: ``
    }
  }
}

export default EntryDetail
