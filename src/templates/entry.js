import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const EntryDetail = (data) => {
  return (
    <>
      <Layout>
        <SEO title={data.title} />
        <p>{data.title}</p>
        <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    entryDetail: microcmsEntries(id: { eq: $id }) {
      body
      id
      slug
      title
    }
  }
`

EntryDetail.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.string,
    slug: PropTypes.int,
    title: PropTypes.string
  })
}

EntryDetail.defaultProps = {
  data: {
    body: ``,
    id: ``,
    slug: null,
    title: ``
  }
}

export default EntryDetail
