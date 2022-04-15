import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        indextest
      <Link to = "test">link test</Link>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          category1
          category2
          title
          description
          hero{
            childImageSharp{
              gatsbyImageData(
                width: 600

              )
            }
          }
        }
      }
    }
  }
`
