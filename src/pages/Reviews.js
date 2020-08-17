import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import Reviewsc from "../components/Reviewsc"

const Reviews = () => (
  <Layout>
    <SEO title={'Reviews'} />
    <Container>
      <h1>Reviews</h1>
      <p className={'lead'}>This where I put all of my thoughts on the things I try.</p>
      <Reviewsc />
    </Container>
  </Layout>
)

export default Reviews