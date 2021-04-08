import React, { useEffect, useState } from 'react';
import{getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import './Review.css'
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart,setCart]= useState([]);
    const [orderPlace,setOrderPlace]= useState(true);
      const handelplaceOrder =()=>{
          setCart([]);
          processOrder();
      }
     const removeProduct =(productKey)=>{
         console.log("Remove Product",productKey);
         const newCart =cart.filter(pd=>pd.key !== productKey);
         setCart(newCart);
         removeFromDatabaseCart(productKey);
     }

      useEffect(() =>{
        const savedCart = getDatabaseCart(cart);
        const productskey = Object.keys(savedCart);

       const cartProducts=  productskey.map(key =>{
       const product = fakeData.find(pd=>pd.key===key);
       product.quantity=savedCart[key];
       
       return product;
      });
      setCart(cartProducts);
    },[]);
     let thankYou ;
     if(orderPlace){
         thankYou = <img src={happyImage} alt=""/>
     }
 
    return (
        <div className="twin-container">
         <div className="cart-container">
         {
                cart.map(pd=> <ReviewItem
                     key={pd.key} 
                     removeProduct={removeProduct}
                     product={pd}>
                         
                     </ReviewItem> )
            }
           {thankYou}
         </div>
         <div>
             <Cart  cart={cart}>
                 <button onClick={handelplaceOrder} className="main-button">Place Order</button>
             </Cart>
         </div>
        
        </div>
    );
};

export default Review;