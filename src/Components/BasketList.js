import React from 'react';
import BasketItem from './BasketItem';

function BasketList(props) {
    const {order,HandleBasket,removeBasketItem} = props;

    const totalPrice = order.reduce((sum,el)=>{
        return sum + el.price * el.quantity
    },0)
    return (
        <div className='bsk'>
            <ul className="collection basket-list">
            <li className='collection-item active'>
                Basket
            </li>
            {order.length ? order.map((item)=>{
                return(
                    <BasketItem inc={props.inc} dec={props.dec} removeBasketItem={removeBasketItem} key={item.id} {...item} />
                )
            }):<li className='collection-item'>Basket is empty</li>}
            <li className='collection-item active'> 
                Total Price: {totalPrice} <b>$</b>
            </li>
            <span>
                <i className='material-icons basket-close' onClick={HandleBasket}>close</i>
            </span>
      </ul>
        </div>
        
    );
}

export default BasketList;