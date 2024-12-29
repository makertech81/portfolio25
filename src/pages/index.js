import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
<div class="max-w-5xl mx-auto py-7 px-10">
   <Layout>
      <div class="flex justify-between flex-wrap">
         <div class="flex flex-col">
            <img class="object-cover h-72 w-72" src="https://images.squarespace-cdn.com/content/v1/5269e87de4b0f35a9eff7300/1454544022501-89PXBS8TQ94H0EQPW34I/msa.jpg" />
            <p class="text-center text-sm">Maritime Surveilence Aircraft</p>
         </div>
         <div class="flex flex-col">
            <img class="object-cover h-72 w-72" src="https://images.squarespace-cdn.com/content/v1/5269e87de4b0f35a9eff7300/1454544022501-89PXBS8TQ94H0EQPW34I/msa.jpg" />
            <p class="text-center text-sm">Maritime Surveilence Aircraft</p>
         </div>
         <div class="flex flex-col">
            <img class="object-cover h-72 w-72" src="https://images.squarespace-cdn.com/content/v1/5269e87de4b0f35a9eff7300/1454544022501-89PXBS8TQ94H0EQPW34I/msa.jpg" />
            <p class="text-center text-sm">Maritime Surveilence Aircraft</p>
         </div>
      </div>
      <div class="flex justify-between flex-wrap">
         <div class="flex flex-col">
            <img class="object-cover h-72 w-72" src="https://images.squarespace-cdn.com/content/v1/5269e87de4b0f35a9eff7300/1454544022501-89PXBS8TQ94H0EQPW34I/msa.jpg" />
            <p class="text-center text-sm">Maritime Surveilence Aircraft</p>
         </div>
         <div class="flex flex-col">
            <img class="object-cover h-72 w-72" src="https://images.squarespace-cdn.com/content/v1/5269e87de4b0f35a9eff7300/1454544022501-89PXBS8TQ94H0EQPW34I/msa.jpg" />
            <p class="text-center text-sm">Maritime Surveilence Aircraft</p>
         </div>
         <div class="flex flex-col">
            <img class="object-cover h-72 w-72" src="https://images.squarespace-cdn.com/content/v1/5269e87de4b0f35a9eff7300/1454544022501-89PXBS8TQ94H0EQPW34I/msa.jpg" />
            <p class="text-center text-sm">Maritime Surveilence Aircraft</p>
         </div>
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
