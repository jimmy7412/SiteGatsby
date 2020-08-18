import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import {Container, Row, Button, Col} from "reactstrap"

export default function AProject() {
  return(
    <StaticQuery query={
      graphql`query {
  allMarkdownRemark(sort: {fields: frontmatter___end_date, order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        frontmatter {
          start_date(formatString: "MMMM YYYY")
          title
          end_date(formatString: "MMMM YYYY")
          current
          live_site
          repo
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
                   <Container className={'mt-5'}>
                     {data.allMarkdownRemark.edges.map(({ node }) => (
                       <div key={node.id}>
                       <Row className={'mb-3'}>
                           <Col md={'6'}>
                           <Link to={node.fields.slug} className={"text-body"}>
                             <h3>
                               {node.frontmatter.title}{" "}
                             </h3>
                             <h4>
                               {node.frontmatter.start_date} -- {node.frontmatter.end_date ? node.frontmatter.end_date : "Present"}
                             </h4>
                           </Link>
                             <Button href={node.frontmatter.repo} color={'success'} target={'_blank'} className={'mr-3'}>Repository</Button>
                             {node.frontmatter.live_site && <Button href={node.frontmatter.live_site} color={'success'} target={'_blank'}>Live Site</Button>}
                           </Col>
                           <Col md={'6'}>
                             <p>{node.excerpt}</p>
                           </Col>
                       </Row>
                       </div>))}
                   </Container>)
                 } />)}