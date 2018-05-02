import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  return (
    <div>

    
      <Container>
        <Jumbotron style={{backgroundColor: "#000"}}>
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle>asdfsdf</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </Card>
        </Jumbotron>
      </Container>
        
      <Container>
        {posts.map(({ node: post }) => (
          <Card style={{marginBottom: 10}} key={post.id}>
            <CardBody>
              <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
              <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
              <CardText>{post.excerpt}</CardText>
            </CardBody>
          </Card>
      ))}
      </Container>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`
