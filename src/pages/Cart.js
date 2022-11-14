import React from 'react';
import Order from '../components/order/Order'
import styled from 'styled-components'

const Cart = () => {
    
    return (
        <Wrapper>
            <Order />
        </Wrapper>
    );
};

export default Cart;

const Wrapper = styled.div`
padding-top: 40px;
    max-width: 850px;
    margin: 0 auto;
    @media(max-width: 768px){
            padding-top: 20px;
        }
`