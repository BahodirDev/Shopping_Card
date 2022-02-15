import React from 'react';

function BasketItem(props) {
    const {id,price,name,quantity,removeBasketItem} = props;
    return (
        <li key={id} className='collection-item'>
            {name} X{quantity} = {price * quantity} <b>$</b>
            <span className='secondary-content' >
            <>
                    <i className='material-icons  add' onClick={()=>props.inc(id)}>add_circle_outline</i>
                    <i className='material-icons  remove' onClick={()=>props.dec(id)}>remove_circle_outline</i>
            </>
                <i className='material-icons basket-delete' onClick={()=>removeBasketItem(id)}>delete_forever</i>
            </span>
        </li>
    );
}

export default BasketItem;