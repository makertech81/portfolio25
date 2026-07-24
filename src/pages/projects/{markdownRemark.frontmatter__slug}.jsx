import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

// Main Project Page Template
export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  // Get the featured image for the project
  let featuredImg = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

  // Get images from the specified folder
  const imageFolder = frontmatter.imageFolder // Folder path from markdown
  const folderName = imageFolder?.replace("../images/", "").replace(/\/$/, "")
  const images = data.allFile.nodes.filter(node =>
    node.relativePath.startsWith(`${folderName}/`)
  )
  // Slick carousel settings
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="max-w-5xl mx-auto py-3.5 px-10">
      <Layout>
        <h1 className="text-center text-3xl pt-3 mb-6 text-gray-800">{frontmatter.title}</h1>

        {images.length > 0 && (
          <Slider {...settings}>
            {images.map((image, index) => {
              const imageData = getImage(image.childImageSharp?.gatsbyImageData)
              return (
                <div key={index}>
                  <GatsbyImage
                    imgStyle={{
                      objectFit: "none",
                      display: "block",
                      }}
                    className="m-auto !block"
                    image={imageData}
                    alt={`Project Image ${index + 1}`}
                  />
                </div>
              )
            })}
          </Slider>
        )}

        <div className="pt-10" dangerouslySetInnerHTML={{ __html: html }} />

        {frontmatter.links?.length > 0 && (
          <div className="pt-6 flex flex-wrap gap-4 justify-center">
            {frontmatter.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        imageFolder
        links {
          label
          url
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 800, height: 500)
        }
      }
    }
  }
`
