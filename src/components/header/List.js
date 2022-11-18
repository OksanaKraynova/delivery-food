import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const List = () => {
    return (
        <Wrapper>
            <li>
                <Link to='/'>Акции</Link>
            </li>
            <li>
                <Link to='/'>О компании</Link>
            </li>
            <li>
                <Link to='/' >Пользовательское соглашение</Link>
            </li>
            <li>
                <Link to='/'>Условия гарантии</Link>
            </li>
            <li>
                <Link to='/' >Ресторан</Link>
            </li>
            <li>
                <Link to='/' >Контакты</Link>
            </li>
            <li>
                <Link to='/' >Поддержка</Link>
            </li>
            <li>
                <Link to='/' >Отследить заказ</Link>
            </li>
        </Wrapper>
    );
};

export default List;

const Wrapper = styled.ul`
    padding: 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 16px;
     background: #FFFFFF;
    border: 1px solid #F0F0F0;
    box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.1);
    border-radius: 12px;
    li{
    transition: color 0.2s ease;
    &:hover{
        color: #FF7010;
    }}
    @media(max-width: 998px){
        border: none;
        border-bottom: 1px solid #F0F0F0;
        gap: 20px;
    }
`