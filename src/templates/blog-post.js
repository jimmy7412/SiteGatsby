import React from "react"
import { graphql } from "gatsby" // highlight-line
import Layout from "../components/layout"

// highlight-start
export default function BlogPost({ data }) {
  const post = data.markdownRemark

  // highlight-end
  return (
    <Layout>
      {/* highlight-start */}
      <div>
        <span>
        <h1>{post.frontmatter.title}</h1>
        </span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {/* highlight-end */}
    </Layout>
  )
}

// highlight-start
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
// highlight-end