import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Contacts from './cart/Contacts';
import Cart from './cart/Cart';
import Logo from './header/Logo';

const Footer = () => {
    return (
        <Wrapper>
            <Container className='container' >
                <Column>
                    <NavLink to='/'>
                        <Logo />
                    </NavLink>
                </Column>
                <Column>
                    <span>Куда пицца</span>
                    <a>О компании</a>
                    <a>Пользовательское соглашение</a>
                    <a>Условия гарантии</a>
                </Column>
                <Column>
                    <span>Помощь</span>
                    <a>Ресторан</a>
                    <a>Контакты</a>
                    <a>Поддержка</a>
                    <a>Отследить заказ</a>
                </Column>
                <Column>
                    <span>Контакты</span>
                    <Contacts />
                </Column>
                <Copyright>© Copyright 2021 — Куда Пицца</Copyright>
                <CartContainer>
                    <Cart />
                </CartContainer>
            </Container>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.footer`
margin-top: auto;
    padding: 32px 0px ;
    background-color: #fff;
    @media(max-width:768px){
padding: 24px 0px 0px 0px;
    }
 
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 24px;
    @media(max-width: 998px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media(max-width: 998px){
        flex: 0 0 40%;
    }
    @media(max-width: 768px){
        flex: 100%;
        gap: 16px;
    }
    span{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
        @media(max-width: 1289px){
            font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1289 - 768)));
        }
        @media(max-width: 768px){
font-size: 14px;
        }
    }
    a{
        font-size: 16px;
        transition: color 0.2s ease;
        &:hover{
            color: #FF7010;
        }
        @media(max-width: 1289px){
            font-size: calc(14px + (16 - 14) * ((100vw - 768px) / (1289 - 768)));
        }
        @media(max-width: 768px){
font-size: 14px;
        }
    }
    a, p{
        display: flex;
        align-items: center;
        img{
            margin-right: 12px;
        }
    }
   
`


const Copyright = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    @media(max-width: 1289px){
    left: 10px;
    }
    @media(max-width: 998px){
        bottom: 220px;
        left: 10%;
    }
    @media(max-width: 768px){
        position: static;
        padding: 12px 0;
        border-top: 1px solid #F0F0F0;
        display: flex;
        width: 100%;
    }
`

const CartContainer = styled.div`
    display: none;
    @media(max-width: 768px){
        display: block;
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
`