/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allMicrocmsEntries {
          edges {
            node {
              id
              slug
              title
              body
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMicrocmsEntries.edges.forEach((edge) => {
      console.log(edge)

      createPage({
        path: `/entries/${edge.node.id}`,
        component: path.resolve(`./src/templates/entry.js`),
        context: {
          id: edge.node.id
        }
      })
    })
  })
}
