import React from "react"
import "../style/elem-1.scss"
import { Carousel } from "react-bootstrap"

import Tech from "../../images/tech.jpg"
import Tech2 from "../../images/tech2.jpg"
import Tech3 from "../../images/tech3.jpg"

export default function Elem1() {
  return (
    <>
      <Carousel fade className="elemCarousel">
        <Carousel.Item className="elemItem">
          <img 
          className="d-block w-100" 
          src={Tech} 
          alt="Second slide" />
          <Carousel.Caption className="elemCaption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="elemItem">
          <img className="d-block w-100" src={Tech2} alt="Second slide" />

          <Carousel.Caption className="elemCaption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="elemItem">
          <img className="d-block w-100" src={Tech3} alt="Third slide" />

          <Carousel.Caption className="elemCaption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
