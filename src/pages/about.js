import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const About = () => (
  <div class="max-w-5xl mx-auto py-3.5 px-10">
   <Layout page={2}>
      <div class="grid md:grid-cols-2 gap-8 grid-cols-1">
         <div class="flex flex-col">
            <img class="object-cover aspect-square h-full w-full " src="https://images.squarespace-cdn.com/content/v1/5269e87de4b0f35a9eff7300/1454544022501-89PXBS8TQ94H0EQPW34I/msa.jpg" />
         </div>
         <div class="flex flex-col">
            <p class="text-gray-500 text-left text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
      </div>
   </Layout>
</div>

)

export const Head = () => <Seo title="About" />

export default About
