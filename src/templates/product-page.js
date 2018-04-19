import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

var bulmaCarousel=function(){'use strict';class a{constructor(a){if(this._clickEvent='ontouchstart'in window?'touchstart':'click',this.element='string'==typeof a?document.querySelector(a):a,!this.element)throw new Error('An invalid selector or non-DOM node has been provided.');this.init()}init(){if(this.items=Array.from(this.element.querySelectorAll('.carousel-item')),this.items.forEach((a)=>{let b=a.querySelector('img');b.setAttribute('draggable',!1)}),this.computedStyle=window.getComputedStyle(this.element),this.previousControl=this.element.querySelector('.carousel-nav-left'),this.nextControl=this.element.querySelector('.carousel-nav-right'),1>=this.items.length){const a=this.element.querySelector('.carousel-container');a&&(a.style.left='0'),this.previousControl&&(this.previousControl.style.display='none'),this.nextControl&&(this.nextControl.style.display='none')}this._bindEvents(),this._initOrder(),this.element.dataset.autoplay&&'true'==this.element.dataset.autoplay&&this._autoPlay(this.element.dataset.delay||5e3)}_bindEvents(){this.previousControl&&this.previousControl.addEventListener(this._clickEvent,(a)=>{a.preventDefault(),this._slide('previous'),this._autoPlayInterval&&(clearInterval(this._autoPlayInterval),this._autoPlay(this.element.dataset.delay||5e3))},!1),this.nextControl&&this.nextControl.addEventListener(this._clickEvent,(a)=>{a.preventDefault(),this._slide('next'),this._autoPlayInterval&&(clearInterval(this._autoPlayInterval),this._autoPlay(this.element.dataset.delay||5e3))},!1),this.element.addEventListener('touchstart',(a)=>{this._swipeStart(a)}),this.element.addEventListener('mousedown',(a)=>{this._swipeStart(a)}),this.element.addEventListener('touchend',(a)=>{this._swipeEnd(a)}),this.element.addEventListener('mouseup',(a)=>{this._swipeEnd(a)})}_initOrder(){const a=this.element.querySelector('.carousel-item.is-active');a||(this.items[0].classList.add('is-active'),a=this.items[0]);const b=this.items.indexOf(a);b?this.items.push(this.items.splice(0,b)):this.items.unshift(this.items.pop()),this._setOrder()}_setOrder(){this.items.forEach((a,b)=>{a.style['z-index']=1===b?'1':'0',a.style.order=b})}_swipeStart(a){this._touch={start:{x:a.clientX,y:a.clientY},end:{x:a.clientX,y:a.clientY}}}_swipeEnd(a){this._touch.end={x:a.clientX,y:a.clientY},this._handleGesture()}_handleGesture(){const a={horizontal:(this._touch.end.x-this._touch.start.x)/parseInt(this.computedStyle.getPropertyValue('width')),vertical:(this._touch.end.y-this._touch.start.y)/parseInt(this.computedStyle.getPropertyValue('height'))};a.horizontal>a.vertical&&.25<a.horizontal&&this._slide('previous'),a.horizontal<a.vertical&&-.25>a.horizontal&&this._slide('next')}_slide(a='next'){if(this.items.length){const b=this.element.querySelector('.carousel-item.is-active');let c;b.classList.remove('is-active'),'previous'===a?(this.items.unshift(this.items.pop()),this.element.classList.add('is-reversing')):(this.items.push(this.items.shift()),this.element.classList.remove('is-reversing')),c=1<=this.items.length?this.items[1]:this.items[0],c.classList.add('is-active'),this._setOrder(),this.element.classList.toggle('carousel-animated'),setTimeout(()=>{this.element.classList.toggle('carousel-animated')},50)}}_autoPlay(a=5e3){this._autoPlayInterval=setInterval(()=>{this._slide('next')},a)}}return document.addEventListener('DOMContentLoaded',function(){var b=document.querySelectorAll('.carousel, .hero-carousel');[].forEach.call(b,function(b){new a(b)})}),a}();

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
                <div className='carousel-container'>
                  <div className='carousel-item has-background is-active'>
                    <img className="is-background" src={main.image1.image} alt={main.image1.alt} width="400" height="150" />
                    <div className="title">{main.image1.alt}</div>
                  </div>
                  <div className='carousel-item has-background'>
                    <img className="is-background" src={main.image2.image} alt={main.image2.alt} width="400" height="150" />
                    <div className="title">{main.image2.alt}</div>
                  </div>
                  <div className='carousel-item has-background'>
                    <img className="is-background" src={main.image3.image} alt={main.image3.alt} width="400" height="150" />
                    <div className="title">{main.image3.alt}</div>
                  </div>
                </div>
                <div className="carousel-navigation is-centered">
                  <div className="carousel-nav-left">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  </div>
                  <div className="carousel-nav-right">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              
              <Testimonials testimonials={testimonials} />
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
    />
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
