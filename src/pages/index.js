import React from 'react'
import { graphql } from 'gatsby'

import RenderCategory from '../components/renderCategory'

class IndexPage extends React.Component {
  render() {
    const data = this.props.data.posts.edges
    return (
      <RenderCategory
        category={data}
        title="GLOSSBOSS"
        subTitle="Dein Autopflege-Blog"
      />
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    posts: allContentfulPost(
      limit: 1000
      sort: { fields: [date], order: DESC }
      filter: { category: { ne: "PAGE" } }
    ) {
      edges {
        node {
          fields {
            fullUrl
            prettyDate
          }
          category
          title
          postImage
          postImageThumb
          subTitle
          author
        }
      }
    }
  }
`
