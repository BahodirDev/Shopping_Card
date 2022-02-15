import React from 'react';
import ItemDetails from './ItemDetails';
import Loader from './Loader';

function ItemList(props) {
    const {items = [],title,setToBasket} = props;

    if(!items.length){
        return(
           <Loader />
        )
    }

    return (
        <div className='shop'>
                {items.map(item=>{
                    return(
                    <ItemDetails setToBasket={setToBasket} key={item.id} {...item} />
                    )
                })}
        </div>
    );
}

export default ItemList;