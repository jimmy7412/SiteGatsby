import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import AProject from "../components/projectsComponents/AProject"

const Projects = () => (
  <Layout>
    <SEO title={'Projects'} />
    <Container>
      <h2>My Projects</h2>
      <AProject />
    </Container>
  </Layout>
)

export default Projects