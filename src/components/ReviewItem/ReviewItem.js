import React from 'react';

const ReviewItem = (props) => {
   // console.log(props);
    const {name,quantity,key,price} = props.product;
    const reviewStyle ={
        borderBottom : '1px solid gray',
        marginBottom :'5px',
        paddingBottom :'5px',
        marginLeft :'5px'
    }
    return (
        <div style={reviewStyle} className="review-item">
            <h3 className="product-name">{name}</h3>
            <p >Quantity : {quantity}</p>
           <p><small>$ {price}</small></p>
            <br/>
            <button 
            className="main-button"
            onClick={()=>props.removeProduct(key)}
            > Remove</button>
        </div>
    );
};

export default ReviewItem;