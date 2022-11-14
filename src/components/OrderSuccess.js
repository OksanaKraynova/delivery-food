import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const OrderSuccess = () => {
    return (
        <Wrapper>
            <Image>
                <img alt='' src='order.png' />
            </Image>
            <span>Заказ №310202 принят</span>
            <p>Спасибо за заказ! Примерное время доставки 45 минут. Статус отследить можно нажав на кнопку ниже</p>
            <NavLink to='/' className='btn btn__big'>На главную</NavLink>
        </Wrapper>
    );
};

export default OrderSuccess;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 100px;
    span{
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
    }
    p{
        font-size: 16px;
        line-height: 22px;
        max-width: 300px;
        margin: 16px 0px 24px 0px;
        text-align: center;
    }
    a{
        width: 196px;
    }
`

const Image = styled.div`
    margin-bottom: 48px;
`