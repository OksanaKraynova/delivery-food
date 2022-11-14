import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const Cart = () => {
    const cart = useSelector(state => state.cartState)
    console.log(cart);
    return (
        <Wrapper className='btn btn__small'>
            <img alt='корзина' src='/icons/cart.svg' />
            <span className='cost'> {cart.cartTotalAmount} ₽</span>
            <Counter className='orange' >{cart.cartItems.length}</Counter>
        </Wrapper>
    );
};

export default Cart;

const Wrapper = styled.button`
    min-width: 89px;
    padding: 0 10px;
    position: relative;
    box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.2);

    @media(max-width: 768px){
        border-radius: 50%;
        min-width: 56px;
        height: 56px;
        position: fixed;
    }
    img{
        margin-right: 8px;
        @media(max-width: 768px){
            margin: 0;
        }
    }
    .cost{
        @media(max-width: 768px){
            display: none;
        }
    }
`

const Counter = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #FF7010;
    background: #FFFFFF;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -2px;
    right: -2px;
    @media(min-width: 768px){
display: none;
    }
`