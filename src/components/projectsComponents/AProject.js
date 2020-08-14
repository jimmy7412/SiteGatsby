import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import {Container, Row, Button} from "reactstrap"

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
                       <Row className={'mb-3'}>
                         <div key={node.id}>
                           <Link to={node.fields.slug} className={"text-body"}>
                             <h3>
                               {node.frontmatter.title}{" "}
                             </h3>
                             <h4>
                               {node.frontmatter.start_date} -- {node.frontmatter.end_date}{node.frontmatter.current}
                             </h4>
                             <p>{node.excerpt}</p>
                           </Link>
                           <Button href={node.frontmatter.repo} color={'success'} target={'_blank'}>Repository</Button>
                         </div>
                       </Row>))}
                   </Container>)
                 } />)}