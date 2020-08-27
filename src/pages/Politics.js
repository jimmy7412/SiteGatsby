import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import Politicscomp from "../components/Politicscomp"

const Politics = () => (
  <Layout>
    <SEO title={'Politics'} />
    <Container>
      <h1>Politics</h1>
      <Politicscomp />
    </Container>
  </Layout>
)

export default Politics