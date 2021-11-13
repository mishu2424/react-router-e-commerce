import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Orderbutton from '../Orderbutton/Orderbutton';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCarts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        if(products.length){
            console.log(products)
            const getItem=getStoredCart();
            console.log(getItem)
            const storedCart=[];
            for(const key in getItem){
                console.log(key)
                const matchedkey=products.find(product=>product.id==key)
                console.log(matchedkey)
                if(matchedkey){
                 const quantity=getItem[key];
                 matchedkey.quantity=quantity;
                 storedCart.push(matchedkey);
                }
            }
            console.log(storedCart)
            setCarts(storedCart);
        }
    },[products])
    const handlerCart=product=>{
        const exists=cart.find(pd=>pd.id==product.id);
        let newCart=[]
        if(exists){
            const remained=cart.filter(pd=>pd.id!==product.id);
            exists.quantity=exists.quantity+1;
            newCart=[...remained,exists]
        }
        else{
            product.quantity=1;
            newCart=[...cart,product];
        }
        setCarts(newCart)

        addToDb(product.id); 
    }
    return (
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4 mb-4">

                {
                    products.length==0? <Spinner animation="border" />:
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handler={handlerCart}
                        >
                        </Product>)
                }
            </Row>
            </Container>
         {/*    <Cart cart={cart}
            >
                <Link to="/review">
                                <button style={{
                                    width:'150px',height:'30px',backgroundColor:'goldenrod',border:'none'
                                }}>Go to order review!</button>
                            </Link>
            </Cart> */}
            <Orderbutton>
            <Link to="/review">
                                <button style={{
                                    width:'150px',height:'30px',backgroundColor:'goldenrod',border:'none'
                                }}>Go to order review!</button>
                            </Link>
            </Orderbutton>
        </div>
    );
};

export default Shop;