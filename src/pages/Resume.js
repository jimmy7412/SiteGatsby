import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"
import { Summary } from "../components/resumeComponents/ResumeSummary"
import TechSkills from "../components/resumeComponents/TechSkills"
import Education from "../components/resumeComponents/Education"
import Experience from "../components/resumeComponents/Experience"

const Resume = () => (
  <Layout>
    <SEO title={'Resume'} />
    <Container>
      <Summary />
      <Row>
        <Col md={'8'}>
          <Experience />
          <Education />
        </Col>
        <Col md={'4'}>
          <TechSkills />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Resume