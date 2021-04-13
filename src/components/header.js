import React from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import rashaLogo from "../images/rasha.png"

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={rashaLogo} alt="RASHA" />
      <div className="socials-line">
        <div className="horizontal-line"></div>
        <div className="socials-container">
          <a href="https://www.github.com/RashaMou">
            <FaGithub className="socials" />
          </a>
          <a href="https://www.linkedin.com/in/rashamoumneh">
            <FaLinkedin className="socials" />
          </a>
          <a href="mailto:hi@rasha.dev">
            <FaEnvelope className="socials" />
          </a>
        </div>
      </div>
      <div className="hi">
        <p>👋🏽 Hi.</p>
        <p>I'm Rasha Moumneh.</p>
      </div>
    </header>
  )
}

export default Header
