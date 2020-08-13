import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import {Container, Row} from "reactstrap"

export default function Education() {
  return(
    <StaticQuery query={
      graphql`query {
  allMarkdownRemark(sort: {fields: frontmatter___end_date, order: DESC}, filter: {frontmatter: {type: {eq: "education"}}}) {
    edges {
      node {
        frontmatter {
          start_date(formatString: "MMMM YYYY")
          title
          end_date(formatString: "MMMM YYYY")
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
                     <h2 className={'text-center mb-4'}>Education</h2>
                       {data.allMarkdownRemark.edges.map(({ node }) => (
                         <Row className={'mb-3'}>
                           <div key={node.id}>
                             <Link to={node.fields.slug} className={"text-body"}>
                               <h3>
                                 {node.frontmatter.title}{" "}
                               </h3>
                               <h4>
                                 {node.frontmatter.start_date} -- {node.frontmatter.end_date}
                               </h4>
                               <p>{node.excerpt}</p>
                             </Link>
                           </div>
                         </Row>))}
                   </Container>)
                 } />)}