/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div class="flex justify-between space-x-4 ">
      <a href="#" class="text-5xl text-gray-800 space-x-4 no-underline tracking-wide">TJ LEDWITH</a>
      <nav class="mt-4">
        <ul class="flex justify-center space-x-8 text-gray-600 text-xs">
          <li><a href="#" class="text-neutral-500 hover:text-gray-800 no-underline">PORTFOLIO</a></li>
          <li><a href="#" class="text-neutral-500 hover:text-gray-800 no-underline no-underline">BLOG</a></li>
          <li><a href="#" class="text-neutral-500 hover:text-gray-800 no-underline no-underline">ABOUT</a></li>
        </ul>
      </nav>
    </div>
    <hr class="h-px bg-gray-200 border-0"></hr>
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()} &middot; TJ Ledwith
    </footer>

    </>
    )
  }

  export default Layout
