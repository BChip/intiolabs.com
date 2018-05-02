import React from 'react'
import { Container, Jumbotron, Card, Button, CardTitle, CardText, Row, Col, Media} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import Helmet from 'react-helmet'
import graphql from 'graphql'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
        
        <Container className="m3">
          <Jumbotron style={{backgroundImage: `url(${post.frontmatter.jumboImage})`, backgroundSize: '100%'}}>
            <Card body inverse>
              <CardTitle className='display-4 grey'>{post.frontmatter.cardTitle}</CardTitle>
              <CardText className='grey'>{post.frontmatter.cardText}</CardText>
              <div className="mini-bar"></div>
            </Card>
          </Jumbotron>  
        </Container>
        <Container className="m3">
          <h1 className='display-5 text-center grey'>{post.frontmatter.serviceTitle}</h1>
          <div className="mini-bar m2 center"></div>
          <p className='text-center grey'>{post.frontmatter.serviceDescription}</p>
          <Row>
            {post.frontmatter.services ? 
              post.frontmatter.services.map(service => <Col className="text-center"><FontAwesome size="5x" name={service.icon} /><p>{service.title}</p></Col>)
            :
            null
            }
          </Row>
        </Container>
        <Container className="m3">
          <h1 className='display-5 text-center grey'>{post.frontmatter.ourProjectsTitle}</h1>
          <div className="mini-bar m2 center"></div>
            <Row>
              {post.frontmatter.projects ? 
                post.frontmatter.projects.map(project => <Col xs="4"><Media><Media left href="#"><Media object className="img-responive" src={project.image} alt={project.alt} /></Media><Media body><Media heading>{project.title}</Media>{project.description}</Media></Media></Col>)
              :
                null
              }
            </Row>
        </Container>
        <Container className="m3">
          <h1 className='display-5 text-center grey'>{post.frontmatter.ourTechSkillsTitle}</h1>
          <div className="mini-bar m2 center"></div>
          <div className="languages text-center">
            <div id="hexagon"><i className="fa devicon-javascript-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-go-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-php-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-python-plain"></i></div>
          </div>
          <div className="frameworks text-center">
            <div id="hexagon"><i className="fa devicon-nginx-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-android-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-meteor-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-react-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-nodejs-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-docker-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-sass-plain"></i></div>
          </div>
          <div className="other text-center">
            
            <div id="hexagon"><i className="fa devicon-apple-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-mysql-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-github-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-linux-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-mongodb-plain"></i></div>
            <div id="hexagon"><i className="fa devicon-html5-plain"></i></div>
            
          </div>
          <br /><br /><br />
        </Container>
        {/*<Container dangerouslySetInnerHTML={{ __html: post.html }} />*/}
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
        cardText
        jumboImage
        serviceTitle
        serviceDescription
        services {
          title
          icon
        }
        ourProjectsTitle
        projects {
          image
          alt
          title
          description
        }
        ourTechSkillsTitle
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
