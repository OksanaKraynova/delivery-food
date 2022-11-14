import React from 'react';
import styled from 'styled-components'

const Counter = ({cartQuantity, handleDecrease, handleIncrease, data}) => {
    return (
        <CounterWrapper >
            <button onClick={()=>handleDecrease(data)}>-</button>
            <span>{cartQuantity}</span>
            <button onClick={() => handleIncrease(data)}>+</button>
        </CounterWrapper>
    );
};

export default Counter;

const CounterWrapper = styled.div`
    background: #FFEEE2;
    border-radius: 6px;
    display: flex;
    height: 36px;
    width: 92px;
    align-items: center;
    padding: 8px;
    justify-content: space-between;
    button{
        padding: 5px;
    }
    @media(max-width: 768px){
        height: 32px;
    }
`