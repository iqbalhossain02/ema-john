import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart=props.cart;
    //console.log(cart);

    // let  total =0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total =total + product.price * product.quantity;
    //}
    const  total=(cart.reduce((total,pd)=>total+pd.price* pd.quantity,0).toFixed(2));
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
    const tax = (total/10).toFixed(2);
 
    return (
        <div>
              <h2 className="text-warning" >Order Summary</h2>
               <h3>Item Order : {cart.length}</h3>
               <h4>Product Price : {total}</h4>
               <p><small>Shipping cost $ : {shipping}</small></p>
               <p> <small> Tax : {tax}</small></p>
               <h3>Total Price : {total + shipping + tax} </h3>
            
               <br/>
           { 
           props.children
           }
        </div>
    );
};

export default Cart;