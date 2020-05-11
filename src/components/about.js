import * as React from "react"
import BannerImage from "./BannerImage"

const About = () => {
  return (
    <>
      <BannerImage />
      <div className="about-flex-container">
        <div className="col-1 about">
          I moved to the US from Beirut, Lebanon in 2013 after a long and and
          satisfying career focused on human rights in the Middle East. I have
          always been drawn to technology, tinkering with websites, building toy
          projects, and creating an online presence for small grassroots groups
          I was a part of. When I found myself at a crossroads, I realized that
          I was lucky enough to have the tools and the ability to actually
          develop that passion. That led me to pursue accreditation as a full
          stack developer at{" "}
          <a href="https://www.lambdaschool.com">Lambda School</a>. I spent
          twelve months - half of which were fulltime - studying and immersing
          myself in web development.
        </div>
        <div className="col-1 about">
          I learned frontend fundamentals such as HTML, CSS, and vanilla
          JavaScript before diving into React and various state management
          systems such as Redux. On the backend, I learned Node, Express, and
          Python, and worked with relational databases such as PostgreSQL.
          Perhaps most importantly, I learned how to work on cross-functional
          teams in a remote working environment to deliver real products used by
          real people. After I finished my coursework, I was hired by the
          stakeholder of the capstone project I worked on at Lambda. You can
          read more about the Key Conservation app below.
        </div>
      </div>
    </>
  )
}

export default About
