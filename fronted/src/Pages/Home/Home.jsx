import React, { useEffect, useState } from 'react'

import { Col, Row } from 'antd';
import { getAllData } from '../../services';
const style = {
  padding: '8px 0',
};
const Home = () => {
  const [product, setProduct]= useState(null)
  useEffect(()=>{
    getAllData().then(res => {
      setProduct(res.data.data)
    })
  },[])

  return (
    <div>
     <h3> New Arrivals</h3>
     <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      {
        product &&
        product.map((p)=>{
          
      
          
        })
      }
     
    </Row>
     
    </div>
  )
}

export default Home