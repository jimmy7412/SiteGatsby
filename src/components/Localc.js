import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import {Container, Row, Col} from "reactstrap"

export default function LocalComponent() {
  return(
    <StaticQuery query={
      graphql`query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "local"}}}) {
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
                               <p>
                                 {node.frontmatter.title}{" "}
                                 <span>
                                   — {node.frontmatter.date}
                                 </span>
                               </p>
                               <p>{node.excerpt}</p>
                             </Link>
                           </div>
                         </Col>))}
                     </Row>
                   </Container>)
                 } />)}