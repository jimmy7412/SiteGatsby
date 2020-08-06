import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import {Container, Table} from "reactstrap"

export default function CenterBlog() {
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
                       <div key={node.id} className={'mt-5'}>
                         <Link to={node.fields.slug} className={'text-body'}>
                           <h3>
                             {node.frontmatter.title}{" "}
                             <span>
                               — {node.frontmatter.date}
                             </span>
                           </h3>
                           <p>{node.excerpt}</p>
                         </Link>
                       </div>))}
                   </Container>
                   <Container className={"justify-content-center"}>
                     <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                     <Table striped>
                       <thead>
                       <tr>
                         <th>Status</th>
                         <th>Count</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                         <th scope={'row'}>Active</th>
                         <td>291</td>
                       </tr>
                       <tr>
                         <th scope={'row'}>Ghosted / Rejected (Greater than 100 days since last contact.)</th>
                         <td>35</td>
                       </tr>
                       <tr>
                         <th scope={'row'}>Rejected (Explicit Rejection)</th>
                         <td>72</td>
                       </tr>
                       </tbody>
                     </Table>
                   </Container>
                   </div>
                 )}/>
  )
}

