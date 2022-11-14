import React from 'react';
import styled from 'styled-components'

const List = () => {
    return (
        <Wrapper>
            <li>
                <a>Акции</a>
            </li>
            <li>
                <a>О компании</a>
            </li>
            <li>
                <a>Пользовательское соглашение</a>
            </li>
            <li>
                <a>Условия гарантии</a>
            </li>
            <li>
                <a>Ресторан</a>
            </li>
            <li>
                <a>Контакты</a>
            </li>
            <li>
                <a>Поддержка</a>
            </li>
            <li>
                <a>Отследить заказ</a>
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