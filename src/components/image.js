import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default (props) => (
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
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })

      if (!image) return

      const imageSizes = props.size ? props.size : image.node.childImageSharp.sizes
      return <Img fluid={imageSizes} alt={props.alt ? props.alt : image.node.name} />
    }}
  />
)
