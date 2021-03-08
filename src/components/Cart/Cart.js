import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    const  total = cart.reduce((total,prd)=>total+prd.price,0)
    let shipping = 0;
    if(total>200){
        shipping =0;
    }
    else if(total>150){
        shipping =6.99;
    }
    else if(total>0){
        shipping =12.99;
    }
    return (
        <div>
              <h2 className="text-warning" >Order Summary</h2>
               <h3>Item Order : {cart.length}</h3>
               <p><small>Shipping cost $ : {shipping}</small></p>
               <h3>Total Price : {total}</h3>
        </div>
    );
};

export default Cart;