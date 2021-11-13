import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    // const {price,quantity}=props.cart;
    let total=0;
    let totalQuantity=0;

    for(const product of cart){
        total=total+product.price;
        if(!product.quantity){
            product.quantity=1;
        }
        totalQuantity=totalQuantity+product.quantity;
    }
    return (
        <div style={{textAlign:'center'}}>
            <h4>Items ordered:{totalQuantity}</h4>
            <h6>Price:{total.toFixed(2)}</h6>
            {props.children}
        </div>
    );
};

export default Cart;