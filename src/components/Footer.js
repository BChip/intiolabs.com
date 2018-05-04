import React from 'react'
import { Container } from 'reactstrap'

const Footer = () => {
  return (
    <Container id="footer" style={{paddingTop: '50px'}}>	
      <div className="text-center">
        <p className="h6">&copy; All right Reserved.<a className="text-green ml-2" href="http://www.intiolabs.com" target="_blank">IntioLabs</a></p>
      </div>	
    </Container>
  )
}

export default Footer

