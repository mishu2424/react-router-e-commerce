import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCarts from '../../Hooks/useCarts';
import Cart from '../Cart/Cart';
import { useHistory } from 'react-router';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Showcart from '../Showcart/Showcart';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';

const Review = () => {
    const [products]=useProducts();
    const [cart,setCarts]=useCarts(products);
    const history=useHistory();
    const handlerReview=()=>{
        history.push('/orderreview')
        setCarts([]);
        clearTheCart();
    }
    const handlerRemove=key=>{
        console.log(key);
        const newCart=cart.filter(pd=>pd.id!==key);
        setCarts(newCart);
        deleteFromDb(key)
    }
    console.log(cart)
    return (
        <div className="mt-3">
            <Container>
                <Row>
                    <Col xs={12} md={7}>
                    {
                        cart.map(cartpd=><Showcart 
                            key={cartpd.id}
                            singleCart={cartpd}
                            handlerRemove={handlerRemove}
                            ></Showcart>)
                    }
                    </Col>
               
            <Col xs={12} md={5}>
            <Cart cart={cart}>
                <Button onClick={handlerReview}>
                    Order
                </Button>
            </Cart>
            </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Review;