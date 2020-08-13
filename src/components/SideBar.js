import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import {Container} from "reactstrap"

export default function SideBar() {
  return(
    <StaticQuery query={
      graphql`query {
  allMarkdownRemark(limit: 5, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
        }
        id
      }
    }
  }
}`
    }
                 render={data => (
                   <div>
                     <Container>
                       {data.allMarkdownRemark.edges.map(({ node }) => (
                         <small>
                         <div key={node.id} className={'mt-3'}>
                           <Link to={node.fields.slug} className={'text-body'}>
                             <h4>
                               {node.frontmatter.title}{" "}
                             </h4>
                             <p>{node.frontmatter.date}</p>
                           </Link>
                         </div>
                         </small>))}
                     </Container>
                   </div>
                 )}/>
  )
}