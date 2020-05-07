import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import rashaLogo from "../images/rasha.png"
import Header from "./header"
import "../styles/layout.scss"
import "../styles/header.scss"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <footer>
          <div className="horizontal-line"></div>
          <div className="footer-flex-container">
            <img className="footer-logo" src={rashaLogo} alt="RASHA" />
            <div className="footer-socials">
              <a href="https://www.github.com/RashaMou">github</a>
              <a href="https://www.linkedin.com/in/rashamoumneh">linkedin</a>
              <a href="mailto:hi@rasha.dev">email</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
