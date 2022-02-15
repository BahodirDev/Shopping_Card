import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {API_KEY,API_URL} from '../API_Config/Config';
import BasketList from '../Components/BasketList';
import Cart from '../Components/Cart';
import ItemList from '../Components/ItemList';
import Loader from '../Components/Loader';
function Main(props) {

    const [items, setItems] = useState([]);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false)
    const [loading, setLoading] = useState(true);

    const ordered='react63'

    const HandleBasket =()=>{
        setIsBasketShow(!isBasketShow)
    }

    const setToBasket = (item)=>{
        // Nusxa ko'chirilgan massivdan (index) ni aniqlaymiz
        const orderIndex = order.findIndex(orderItem => orderItem.id === item.id)
        // Agar index mavjud bo'lmasa, yangi objectni, massivga qo'shamiz
        if(orderIndex<0){
            const newOrder = {
                ...item,
                quantity:1
            }
            setOrder([...order,newOrder])
        }else{
            // Agar index mavjud bo'lsa, uni
            // Filter bilan ishlab ko'rish kerak
            const newMassiv = order.map((itemList,index)=>{
                if(index === orderIndex){
                    return{
                        ...itemList,
                        quantity:itemList.quantity + 1
                    }
                }else{
                    return itemList
                }
            })
            setOrder(newMassiv)
        }
        toast.info('Item added to Basket successfully')

        
    }

    const removeBasketItem =(itemId)=>{
        const newOrder = order.filter(s=>s.id !== itemId)
        setOrder(newOrder)
        toast.error('Item removed from Basket successfully')
    }

    const inc =(itemId)=>{
        const newOrder = order.map((el)=>{
            if(el.id === itemId){
                const ElQuantity = el.quantity;
                return{
                    ...el,
                    quantity:ElQuantity+1
                }
            }else{
                return el
            } 
        })
        setOrder(newOrder)
    }

    const dec=(itemId)=>{
        const newOrder = order.map((el)=>{
            if(el.id === itemId){
                const quantity = el.quantity-1;
                return{
                    ...el,
                    quantity: quantity >=0 ? quantity :0
                }
            }else{
                return el
            }
        })
        setOrder(newOrder)
    }

    useEffect(()=>{
        fetch(API_URL,{
            headers:{
                Authorization:API_KEY
            }
        })
        .then((response) => response.json())
        .then(data=>setItems(data.featured))
        setLoading(false)
    },[])

    return (
        <div className='content container'>
            <Cart quantity={order.length} HandleBasket={HandleBasket} />
                {loading ? <Loader /> : (<ItemList title={ordered} setToBasket={setToBasket} items={items} />)}
                {isBasketShow && <BasketList removeBasketItem={removeBasketItem} inc={inc} dec={dec} HandleBasket={HandleBasket} order={order} />}
        </div>
    );
}

export default Main;