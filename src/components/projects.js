import * as React from "react"
import placeholder from "../images/placeholder.png"

const Projects = () => {
  return (
    <div>
      <div className="horizontal-line"></div>
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-flex-container">
        <div className="project proj-1">
          <img className="placeholder" src={placeholder} alt="placeholder" />
        </div>
        <div className="project proj-2">
          <img className="placeholder" src={placeholder} alt="placeholder" />
        </div>
        <div className="project proj-3">
          <img className="placeholder" src={placeholder} alt="placeholder" />
        </div>
        <div className="project proj-4">
          <img className="placeholder" src={placeholder} alt="placeholder" />
        </div>
      </div>
    </div>
  )
}

export default Projects
