import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename)
      })

      if (!image) {
        return
      }

      const imageSizes = image.node.childImageSharp.sizes

      return (
        <Img fluid={imageSizes} alt={props.alt ? props.alt : image.node.name} />
      )
    }}
  />
)

Image.displayName = 'image'

Image.propTypes = {
  alt: PropTypes.string,
  filename: PropTypes.string.isRequired
}

Image.defaultProps = {
  alt: `image`,
  filename: ``
}

export default Image
