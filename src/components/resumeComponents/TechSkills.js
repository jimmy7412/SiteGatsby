import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import {Container, Row, Col} from "reactstrap"

export default function TechSkills() {
  return(
    <StaticQuery query={
  graphql`{
  allMarkdownRemark(sort: {fields: frontmatter___skill_strength, order: DESC}, filter: {frontmatter: {type: {eq: "skill"}}}) {
    edges {
      node {
        frontmatter {
          start_date(fromNow: true)
          title
          duration
        }
        id
        excerpt
        fields {
          slug
        }
      }
    }
  }
}
`
}
                 render = {data => (
    <Container>
      <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col md={'4'} className={'text-center'}>
          <div key={node.id}>
            <Link to={node.fields.slug} className={"text-body"}>
              <p>
                {node.frontmatter.title}{" "}
                <span>
                                   — {node.frontmatter.duration}
                                 </span>
              </p>
            </Link>
          </div>
          </Col>))}
      </Row>
      </Container>)
  } />)}
