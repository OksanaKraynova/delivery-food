import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { addToCart, decreaseCart, getTotals } from '../../reducers/cartReducer';
import Good from './Good';

const CartField = ({ active, setActive }) => {
    const cart = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])
    return (
        <Wrapper className={active ? 'active' : ''} >
            <Container onClick={e => e.stopPropagation()}>
                <Header>
                    <span>Ваш заказ</span>
                    <button onClick={() => setActive(false)}>
                        <img src='/icons/close3.svg' alt='' />
                    </button>
                </Header>
                <Body>
                    <Good />
                </Body>
                <Footer>
                    <p className='orange'>Итого: {cart.cartTotalAmount} ₽</p>
                    {cart.cartItems.length === 0 ? <NavLink to='/cart' onClick={(e) => e.preventDefault()} className='btn btn__big disable'>   Оформить заказ</NavLink> : <NavLink to='/cart' onClick={() => setActive(false)} className='btn btn__big'>  Оформить заказ</NavLink>}
                </Footer>
            </Container>

        </Wrapper>
    );
};

export default CartField;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 420px;
    background-color: #fff;
    padding-top: 12px;
    height: 100%;
    transform: translateX(100%);
    z-index: 999;
    transition: transform 0.2s ease;
    @media(max-width: 768px){
        width: 100%;
    }
    &.active{
        transform: translateX(0%);
    }
`

const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    position: relative;
    padding-bottom: 83px;
`

const Header = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
        font-weight: 600;
        font-size: 32px;    
    }
`
const Body = styled.div`
    padding: 0 20px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 14px;
`

const Footer = styled(Header)`
    margin-top: auto;
    padding: 12px 0;
    border-top: 1px solid #F0F0F0;
    position: absolute;
    bottom: 0;
    z-index: 6;right: 0;
    left: 0;
    background-color: #fff;
    p{
        font-weight: 600;
        font-size: 20px;
        margin-left: 20px;
        @media(max-width: 768px){
            font-size: 16px;
            margin-left: 12px;
        }
    }
    a{
        min-width: 178px;
        margin-right: 20px;
        @media(max-width: 768px){
            min-width: 160px;
            margin-right: 12px;
        }
    }
    .disable{
        background-color: #e6e6e6;
        cursor: not-allowed ;
    }
`
