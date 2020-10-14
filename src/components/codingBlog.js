import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import {Container, Row, Col} from "reactstrap"

export default function CodingComponent() {
  return(
    <StaticQuery query={
      graphql`query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "coding"}}}) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        id
        excerpt
        fields {
          slug
        }
      }
    }
  }
}`
    }
                 render = {data => (
                   <Container>
                     <Row>
                       {data.allMarkdownRemark.edges.map(({ node }) => (
                         <Col md={'4'}>
                           <div key={node.id}>
                             <Link to={node.fields.slug} className={"text-body"}>
                               <h4>
                                 {node.frontmatter.title}{" "}
                               </h4>
                               {node.frontmatter.date}
                               <p>{node.excerpt}</p>
                             </Link>
                           </div>
                         </Col>))}
                     </Row>
                   </Container>)
                 } />)}