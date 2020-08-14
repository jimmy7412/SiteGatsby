import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import { Summary } from "../components/resumeComponents/ResumeSummary"
import TechSkills from "../components/resumeComponents/TechSkills"
import Education from "../components/resumeComponents/Education"
import Experience from "../components/resumeComponents/Experience"

const Weather = () => (
  <Layout>
    <SEO title={'Weather'} />
    <Container>
      <Summary />
      <TechSkills />
      <Education />
      <Experience />
    </Container>
  </Layout>
)

export default Weather