import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, cdp) => total + cdp.price, 0)
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Total Pirce: ${total}</p>
        </div>
    );
};

export default Cart;