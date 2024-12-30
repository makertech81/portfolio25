/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ page, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
    <div class={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>

    <ul class="max-w-5xl mx-auto text-gray-600 text-center mb-0">
          <li><a href="#" class="text-neutral-400 hover:text-gray-800 no-underline">PORTFOLIO</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-gray-800 no-underline no-underline">ABOUT</a></li>
        </ul>
    </div>
    <hr class={`max-w-5xl mx-auto h-px bg-gray-200 border-0 m-3 mt-0 transition-all ease-in-out duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></hr>
    <div class={`md:hidden text-center pb-3 transition-all ease-in-out duration-500 ${isOpen ? 'mt-0' : '-mt-3.5'}`}>
    <button 
        onClick={toggleMenu}
        className={`text-neutral-500 hover:text-gray-800 no-underline no-underline`}
      >
        MENU
      </button>
    </div>
    <hr class="md:hidden h-px bg-gray-200 border-0"></hr>
    <div class="md:flex md:justify-between block text-center pb-6 md:pb-0">
      <a href="/" class="text-5xl text-gray-800 no-underline tracking-wide">TJ LEDWITH</a>
      <nav class="mt-4 hidden md:flex">
        <ul class="flex justify-center space-x-8 text-gray-600 text-xs">
          <li><a href="/" class={`hover:text-gray-800 no-underline ${page === 1 ? 'text-gray-800' : 'text-neutral-400'}`}>PORTFOLIO</a></li>
          <li><a href="/about" class={`hover:text-gray-800 no-underline no-underline ${page === 2 ? 'text-gray-800' : 'text-neutral-400 '}`}>ABOUT</a></li>
        </ul>
      </nav>
    </div>
    <hr class="h-px bg-gray-200 border-0"></hr>
    <main>{children}</main>
    <footer class="pt-8">
      © {new Date().getFullYear()} &middot; TJ Ledwith
    </footer>

    </>
    )
  }

  export default Layout
