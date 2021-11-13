import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = (props) => {
    const {image,title,id,price,category}=props.product;
    const {handler}=props;
    return (
        <>
          <Col>
          <Card style={{ width: '19rem',height:'400px',textAlign:'center' }}>
  <Card.Img style={{height:'250px'}} variant="top" src={image} />
  <Card.Body>
    <Card.Title title={title}>{title.slice(0,10)}...</Card.Title>
    <Card.Text>
     {category}
    </Card.Text>
    <Button onClick={()=>handler(props.product)} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </Col>  
        </>
    );
};

export default Product;