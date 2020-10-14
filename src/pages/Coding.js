import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import CodingComponent from "../components/codingBlog.js"

const Coding = () => (
  <Layout>
    <SEO title={'Coding'} />
    <Container>
      <h1>Coding Progress</h1>
      <CodingComponent />
    </Container>
  </Layout>
)

export default Coding