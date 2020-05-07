import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="rasha.dev" />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
