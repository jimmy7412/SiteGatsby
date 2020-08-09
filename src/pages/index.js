import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CenterBlog from "../components/CenterBlog"
import { Jumbotron, Container, Row, Col } from "reactstrap"
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
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage


