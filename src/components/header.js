import React from "react"
import rashaLogo from "../images/rasha.png"
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa"

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
          <a href="https://www.linkedin.com/in/rashamoumneh">
            <FaFile className="socials" />
          </a>
          <a href="mailto:hi@rasha.dev">
            <FaEnvelope className="socials" />
          </a>
        </div>
      </div>
      <div className="hi">
        <p>Hi. My name is Rasha Moumneh.</p>
        <p>I am a fullstack developer living in</p>
        <p>Philadelphia, PA.</p>
      </div>
    </header>
  )
}

export default Header
