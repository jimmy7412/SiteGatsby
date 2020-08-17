import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import Politicscomp from "../components/Politicscomp"

const Politics = () => (
  <Layout>
    <SEO title={'Politics'} />
    <Container>
      <Politicscomp />
    </Container>
  </Layout>
)

export default Politics