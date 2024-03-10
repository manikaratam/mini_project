import React from 'react'
import './Popular.css'
import { Container } from 'react-bootstrap'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <Container fluid>
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
        </div>
            <div className="popular_item">
            {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        

    </Container>
  )
}

export default Popular
