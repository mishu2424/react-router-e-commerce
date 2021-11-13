import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb"

const useCarts=products=>{
    const [cart,setCarts]=useState([]);
    useEffect(()=>{
        if(products.length){
            const getItem=getStoredCart();
            const storedCart=[];
            for(const key in getItem){
                const matchedkey=products.find(product=>product.id==key)
                if(matchedkey){
                 const quantity=getItem[key];
                 matchedkey.quantity=quantity;
                 storedCart.push(matchedkey);
                }
            }
            setCarts(storedCart);
        }
    },[products])
    return [cart,setCarts]
}
export default useCarts;