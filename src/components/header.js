import React from "react"
import rashaLogo from "../images/rasha.png"

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={rashaLogo} alt="RASHA" />
      <div className="horizontal-line"></div>
      <div className="hi">
        <p>Hi. My name is Rasha Moumneh.</p>
        <p>I am a fullstack developer living in</p>
        <p>Philadelphia, PA.</p>
      </div>
    </header>
  )
}

export default Header
