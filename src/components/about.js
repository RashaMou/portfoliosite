import * as React from "react"
import BannerImage from "./BannerImage"

const About = () => {
  return (
    <>
      <BannerImage />
      <div className="about-flex-container">
        <div className="col-1 about">
          <p>
            I'm a relatively recent transplant to the US, having moved here from
            Beirut, Lebanon in 2013.
          </p>
          <p>
            When I found myself at a career crossroads, I realized that I was
            lucky enough to have the opportunity to pursue my passion for
            building things with code.
          </p>
          <p>
            That led me to work towards accreditation as a full stack developer
            at <a href="https://www.lambdaschool.com">Lambda School</a>. I spent
            twelve months - half of which were fulltime - studying and immersing
            myself in web development.
          </p>
        </div>
        <div className="col-1 about">
          <p>
            I learned frontend fundamentals such as HTML, CSS, and vanilla
            JavaScript before diving into React and various state management
            systems such as Redux. On the backend, I learned Node, Express, and
            Python, and worked with relational databases such as PostgreSQL.
          </p>
          <p>
            Perhaps most importantly, I learned how to work on cross-functional
            teams in a remote working environment to deliver real products used
            by real people. After I finished my coursework, I was hired by the
            stakeholder of the capstone project I developed as a member of a 6
            person team at Lambda. You can read more about the Key Conservation
            app below.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
