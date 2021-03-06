import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'
import 'font-awesome/css/font-awesome.css'
import 'devicon/devicon.min.css'


export default class TemplateWrapper extends React.Component{
  render(){
    let user
    if (typeof window !== 'undefined') {
      user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
    }
    return (
      <div className='App'>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <Container>
            <Link to='/' className='navbar-brand'><img className="logo" src="/files/logo.png" /></Link>
            <ul className='nav navbar-nav'>

              {user && (
                <li className='nav-item'>
                  <a href='/admin' className='nav-link grey'>Admin</a>
                </li>
              )}

              <li className='nav-item'>
                <Link to='/about' className='nav-link grey'>About</Link>
              </li>
            </ul>
          </Container>
        </div>
        <div className='pageContent'>{this.props.children()}</div>
        
      </div>
    )
  }
  
}


export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
