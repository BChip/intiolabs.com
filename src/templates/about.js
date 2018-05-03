import React from 'react'
import { Container, Jumbotron, Card, Button, CardTitle, CardText, Row, Col, Media} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      hideHex: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({hideHex: window.innerWidth <= 1000});
  }

  render(){
    const { markdownRemark: post } = this.props.data
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} />
        
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
          {this.state.hideHex ? 
            <Row>
              <Col className="text-center">
                <li>Fill me in</li>
                <li>Python</li>
                <li>javascript</li>
              </Col>
              <Col className="text-center">
                <li>Fill me in</li>
                <li>blah</li>
              </Col>
            </Row>
            :
            <div>
            <div className="languages text-center">
            <div id="hexagon"><i className="icon devicon-javascript-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-go-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-php-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-python-plain"></i></div>
          </div>
          <div className="frameworks text-center">
            <div id="hexagon"><i className="icon devicon-nginx-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-android-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-meteor-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-react-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-nodejs-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-docker-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-sass-plain"></i></div>
          </div>
          <div className="other text-center">
            
            <div id="hexagon"><i className="icon devicon-apple-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-mysql-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-git-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-linux-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-mongodb-plain"></i></div>
            <div id="hexagon"><i className="icon devicon-html5-plain"></i></div>
            
          </div>
          <br /><br /><br />
          </div>
          }
          </Container>
        <Footer />
        {/*<Container dangerouslySetInnerHTML={{ __html: post.html }} />*/}
      </div>
    )
  }
}

export default Template

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
