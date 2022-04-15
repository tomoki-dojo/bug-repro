import React from 'react'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import {GatsbyImage, getImage} from "gatsby-plugin-image"


const BlogPostTemplate = ({ data, location }) => {

  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const eyecatch = getImage(data.mdx.frontmatter.hero)
  

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div>
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <div>
              <div>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <div>
                  <GatsbyImage
                    image = {eyecatch}
                    alt = "eyecatch img"
                  />
                </div>

                <MDXRenderer
                  frontmatter={post.frontmatter}
                  itemProp="articleBody"
                  localImagesL = {post.frontmatter.embeddedImagesLocalL}
                  localImagesP = {post.frontmatter.embeddedImagesLocalP}
                >
                  {post.body}
                </MDXRenderer>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      tableOfContents
      fields{
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category1
        category2
        hero{
          childImageSharp{
            gatsbyImageData(
              width: 1024
            )
            fluid{
              src
            }
          }
        }
        description
        embeddedImagesLocalL {
          childImageSharp{
            gatsbyImageData(
              width: 1024
            )
          }
        }
        embeddedImagesLocalP {
          childImageSharp{
            gatsbyImageData(
              height: 1024
              aspectRatio: 0.666666
            )
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        category1
        category2
        title
        hero{
          childImageSharp{
            gatsbyImageData
          }
        }
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        category1
        category2
        title
        hero{
          childImageSharp{
            gatsbyImageData
          }
        }
      }
    }
  }
`
