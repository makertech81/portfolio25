import * as React from "react"
import { graphql } from 'gatsby' 
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`;


const IndexPage = ({data}) => (

<div class="max-w-5xl mx-auto py-3.5 px-10">
   <Layout page={1}>
      <div class="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-4">
        {data.allMarkdownRemark.edges.map(({ node }) => (
         <a class="flex flex-col" href={`/projects/${node.frontmatter.slug}`}>
            <GatsbyImage className="!object-cover !aspect-square !h-full !w-full" image={getImage(node.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)} />
            <p class="text-center text-sm text-gray-800 pt-2 -mb-2">{node.frontmatter.title}</p>
         </a>
         ))}
      </div>
   </Layout>
</div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */


export const Head = () => <Seo title="Home" />

export default IndexPage
