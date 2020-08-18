import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import {Container, Row} from "reactstrap"

export default function Experience() {
  return(
    <StaticQuery query={
      graphql`query {
  allMarkdownRemark(sort: {fields: frontmatter___end_date, order: DESC}, filter: {frontmatter: {type: {eq: "experience"}}}) {
    edges {
      node {
        frontmatter {
          start_date(formatString: "MMMM YYYY")
          title
          end_date(formatString: "MMMM YYYY")
          current
          company
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
                     <h2 className={'text-center mb-4'}>Experience</h2>
                     {data.allMarkdownRemark.edges.map(({ node }) => (
                       <Row className={'mb-3'}>
                         <div key={node.id}>
                           <Link to={node.fields.slug} className={"text-body"}>
                             <h3>
                               {node.frontmatter.title}{" "} - {node.frontmatter.company}
                             </h3>
                             <h4>
                               {node.frontmatter.start_date} -- {node.frontmatter.end_date ? node.frontmatter.end_date : node.frontmatter.current}
                             </h4>
                             <p>{node.excerpt}</p>
                           </Link>
                         </div>
                       </Row>))}
                   </Container>)
                 } />)}