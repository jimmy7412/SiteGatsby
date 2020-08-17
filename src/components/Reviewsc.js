import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import {Container, Row, Col, Badge} from "reactstrap"

export default function Reviewsc() {
  return(
    <StaticQuery query={
      graphql`query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "review"}}}) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          cat
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
                               <h5>
                                 {node.frontmatter.title}{" "}
                               </h5>
                               <p>
                                 {node.frontmatter.date}
                               </p>
                                 <Badge className={'primary'}>
                                 {node.frontmatter.cat}
                                 </Badge>
                               <p>{node.excerpt}</p>
                             </Link>
                           </div>
                         </Col>))}
                     </Row>
                   </Container>)
                 } />)}