import React from 'react'
import './Hero.css'
import { Col, Container, Row } from 'react-bootstrap'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
import arrow from '../Assets/arrow.png'
const Hero = () => {
  return (
    <Container fluid className='hero' >
        <Row>
          <Col lg={6} md={6} sm={6}>
            <div className="hero_left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero_icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for every one</p>
                <div className="hero_latest_btn">
                    <div>Latest Collection</div>
                    <img src={arrow} alt="" />
                </div>
            </div>

          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className="hero_right">
                <img src={hero_image} alt="" />
            </div>

          </Col>

        </Row>

    </Container>
  )
}

export default Hero
