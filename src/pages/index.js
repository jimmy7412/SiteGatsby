import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CenterBlog from "../components/CenterBlog"
import { Container, Row, Col } from "reactstrap"
import '../components/IndexStyle.css'
import FrontHeading from "../components/FrontHeading"
import SideBar from "../components/SideBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FrontHeading />
      <Container>
          <Row>
              <Col sm={'9'}>
                  <CenterBlog />
              </Col>
              <Col sm={'3'}>
                  <SideBar />
              </Col>
          </Row>
      </Container>
  </Layout>
)

export default IndexPage


