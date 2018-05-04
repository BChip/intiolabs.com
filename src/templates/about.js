import React from 'react'
import { Container, Jumbotron, Card, Button, CardTitle, CardText, Row, Col, Media, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
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
              <CardTitle className='display-4 grey'><span className="green">{'{ '}</span>{post.frontmatter.cardTitle}<span className="green">{' }'}</span></CardTitle>
              <CardText className='grey'>{post.frontmatter.cardText}</CardText>
              <div className="mini-bar"></div>
            </Card>
          </Jumbotron>  
        </Container>
        <Container className="m3">
          <h1 className='display-5 text-center grey'><span className="green">{'[ '}</span>{post.frontmatter.serviceTitle}<span className="green">{' ]'}</span></h1>
          <div className="mini-bar m2 center"></div>
          <p className='text-center grey'>{post.frontmatter.serviceDescription}</p>
          <Row>
            {post.frontmatter.services ? 
              post.frontmatter.services.map(service => <Col className="text-center"><FontAwesome className="m1" size="5x" name={service.icon} /><p>{service.title}</p></Col>)
            :
            null
            }
          </Row>
        </Container>
        <Container className="m3">
          <h1 className='display-5 text-center grey'><span className="green">{'< '}</span>{post.frontmatter.ourProjectsTitle}<span className="green">{' />'}</span></h1>
          <div className="mini-bar m2 center"></div>
            <Row>
              {post.frontmatter.projects ? 
                post.frontmatter.projects.map(project => <Col xs="4"><Row><Col><Media object className="img-fluid" src={project.image} alt={project.alt} /></Col><Col><Media body><Media heading>{project.title}</Media>{project.description}</Media></Col></Row></Col>)
              :
                null
              }
            </Row>
        </Container>
        <Container className="m3">
          <h1 className='display-5 text-center grey'><span className="green">{'/* '}</span>{post.frontmatter.ourTechSkillsTitle}<span className="green">{' */'}</span></h1>
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
            <Row>
              <Col xs="8">
                <div className="m5">
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
                </div>
              </Col>
              <Col xs="4">
                <p>We are generalists—mastering many languages, platforms, and practices so they can choose the best one for each task.</p>
                <p>This also helps us bring together different technologies, so we're well-suited to projects that cross several platforms. Imagining a wearable device that talks to a mobile app and stores data in the cloud? We can do that—all in-house, from strategy to deployment.</p>


              </Col>
            </Row>       
          }
          </Container>
          <Container className="m3">
          <h1 className='display-5 text-center grey'>Contact<span className="green">{'(  )'}</span></h1>
          <div className="mini-bar m2 center"></div>
          <Form name="contactus" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <FormGroup row >
              <Label for="exampleEmail" sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" placeholder="Joe Daniels" />
              </Col>
            </FormGroup>
            <FormGroup row >
              <Label for="exampleEmail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" placeholder="joedaniels@intiolabs.com" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>Platforms</Label>
              <Col sm={10}>
                <Input type="select" name="platform" multiple>
                  <option>Web</option>
                  <option>Mobile</option>
                  <option>Desktop</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>Message</Label>
              <Col sm={10}>
                <Input type="textarea" name="message" />
              </Col>
            </FormGroup>
            <FormGroup row style={{float: 'right', marginRight: '5px'}}>
                <div data-netlify-recaptcha></div>
                <Button type="submit" color="success">Submit</Button>
            </FormGroup>
        </Form>
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
