import React from 'react';

function Cart(props) {
    const {quantity = 0, HandleBasket= Function.prototype} = props;
    return (
        <div className='cart blue darken-4 ' onClick={HandleBasket}>
                <i className="material-icons cart-icon">add_shopping_cart</i>
                {quantity ? <span className='quantity-cart'>{quantity}</span> : null}
        </div>
    );
}

export default Cart;