import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <Container className='subscribe'>
        <div className="newsletter">
        <h1>Get Exclusive offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay update</p>
        </div>
        <div>
         <input type="search" placeholder=' Your email Id...' />
         <Button variant='danger'>Subscribe</Button>
        </div>
        <section style={{height:'50px'}}></section>
    </Container>
  )
}

export default NewsLetter
