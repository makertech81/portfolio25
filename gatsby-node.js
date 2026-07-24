/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      title: String
      slug: String
      date: Date @dateformat
      featuredImage: File @fileByRelativePath
      imageFolder: String
      links: [ProjectLink]
    }

    type ProjectLink {
      label: String
      url: String
    }
  `)
}
