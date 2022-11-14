import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Slider from '../Slider';
import FormOrder from './FormOrder';
import Item from './Item';
import Promo from './Promo';
import {snack} from './../../db/snack'
import {drinks} from './../../db/drinks'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../reducers/cartReducer';

const Order = () => {
    
    const cart = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    const handleDecrease = item =>{
        dispatch(decreaseCart(item))
    }

    const handleIncrease = item => {
        dispatch(addToCart(item))
    }

    const removeItem = product=>{ 
        dispatch(removeFromCart(product))
    }
    const clearAll = () =>{
        dispatch(clearCart())
    }
    return (
        <Wrapper className='container'>
            <Title>Ваш заказ</Title>
            <Block>
               {cart.cartItems && cart.cartItems.map(item => (
                <Item key={item.id} data={item} removeItem={removeItem} handleDecrease={handleDecrease} handleIncrease={handleIncrease} /> 
               ))}
               {cart.cartItems.length > 0 && <Btn onClick={() => clearAll()} className='btn'>Очистить корзину</Btn>}
                <Promo totalAmount={cart.cartTotalAmount} />
            </Block>
            
            <Slider title={'Добавить к заказу?'} group={snack}/>
            <Slider title={'Напитки'} group={drinks}/>
            <FormOrder />

        </Wrapper>
    );
};

export default Order;

const Wrapper = styled.div``

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
    @media(max-width: 768px){
        margin-top: 16px;
        gap: 12px;
    }
`
const Title = styled.p`
    font-weight: 600;
    font-size: 40px;
    @media(max-width: 1289px){
            font-size: calc(18px + (40 - 18) * ((100vw - 768px) / (1289 - 768)));
        }
        @media(max-width: 768px){
            font-size: 18px;
        }
`

const Btn = styled.button`
    padding: 15px 0px;
`