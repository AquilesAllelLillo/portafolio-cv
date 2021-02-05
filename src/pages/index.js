import React from "react"
// import { Link } from "gatsby"

import Sidebar from "../components/Sidebar/Sidebar"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <Sidebar />
    <Layout>
      <SEO title="Home" />
    </Layout>
  </React.Fragment>
)

export default IndexPage
