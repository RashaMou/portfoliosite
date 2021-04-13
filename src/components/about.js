import * as React from "react"
import BannerImage from "./BannerImage"

const About = () => {
  return (
    <>
      <BannerImage />
      <p className="about">
        I'm a software developer in Philadelphia, PA. Below you'll find some of
        the projects I've worked on. To see more of what I've built, feel free
        to browse my <a href="https://www.github.com">GitHub</a>.
      </p>
    </>
  )
}

export default About
