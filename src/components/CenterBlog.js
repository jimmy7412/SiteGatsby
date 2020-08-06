import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Container from "reactstrap/es/Container"

export default function CenterBlog() {
  return(
    <StaticQuery query={
      graphql`query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`
    }
                 render={data => (
                   <Container>
                     <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                   </Container>
                 )}/>
  )
}

