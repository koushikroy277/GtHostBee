import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstPage from "./page-1";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FirstPage />
  </Layout>
)

export default IndexPage
