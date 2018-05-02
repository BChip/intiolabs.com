import React from 'react'
import { Container, Jumbotron, Card, Button, CardTitle, CardText} from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'

export default function Template ({ data }) {
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
      
      <Container>
      <Jumbotron style={{backgroundColor: "#000"}}>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>{post.frontmatter.cardTitle}</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>
      </Jumbotron>  
        <h1 className='display-3'>{post.frontmatter.title}</h1>
      </Container>
      <Container dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        cardTitle
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
