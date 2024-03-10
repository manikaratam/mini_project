import React from 'react'
import './Offers.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <Container className='offers'>
        <Row>
            <Col lg={6} md={6} sm={6}>
                <div className="offers_data">
                    <h2>Exclusive</h2>
                    <h2>Offers For You</h2>
                    <p>ONLY ON BEST SELLERS PRODUCTS</p>
                     <Button variant="danger">Check Now</Button>
                </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
                <div className="offers_image">
                   <img src={exclusive_image} alt="" />
                </div>

            </Col>
        </Row>

    </Container>
  )
}

export default Offers
