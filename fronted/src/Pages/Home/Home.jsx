import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { Col, Row } from 'antd';
const style = {
  padding: '8px 0',
};
const Home = () => {
  

  return (
    <div>
     <h3> New Arrivals</h3>
     <Row gutter={16}>
      {
        products && products.map((p) =>{
          return(
<Col className="gutter-row" span={6}>
        <div style={style}> <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={imageURL} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></div>
      </Col> )
        })
      }
      
      </Row>
    </div>
  )
}

export default Home