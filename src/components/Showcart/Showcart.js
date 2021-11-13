import React from 'react';

const Showcart = (props) => {
    const {title,price,description,category,id}=props.singleCart;
    // console.log(props.singleCart)
    // console.log(title)
    const {handlerRemove}=props;
    console.log(handlerRemove)
    return (
        <div style={{
            borderBottom:'1px solid grey',
            paddingBottom:'2%'
        }}>
            <h4>Title:{title}</h4>
            <p><small>{description}</small></p>
            <h6>Price:${price}</h6>
            <h5>Category:{category}</h5>
           <button onClick={()=>handlerRemove(id)} style={{
             width:'150px',height:'30px',backgroundColor:'goldenrod',border:'none'}}>
                Remove
            </button> 
        </div>
    );
};

export default Showcart;