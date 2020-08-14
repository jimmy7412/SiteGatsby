import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import Localc from "../components/Localc"

const Local = () => (
  <Layout>
    <SEO title={'Local'} />
    <Container>
      <h1>Local News</h1>
      <Localc />
    </Container>
  </Layout>
)

export default Local