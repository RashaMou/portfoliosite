import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import About from "../components/about"
import "../styles/body.scss"
import "../styles/layout.scss"
import "../styles/header.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Rasha Moumneh" />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
