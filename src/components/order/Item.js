import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import Counter from '../Counter';

const Item = ({ data, removeItem, handleDecrease, handleIncrease }) => {
 
    return (
        <Card className='card'>
            <img alt='' src={data.image} />
            <div className='row'>
                <Content>
                    <p>{data.name}</p>
                    <span>{data.description}</span>
                </Content>
                <Cost className='orange'>
                    <Counter cartQuantity={data.cartQuantity} handleDecrease={handleDecrease} data={data} handleIncrease={handleIncrease} />
                    <Price>{data.cost * data.cartQuantity} ₽</Price>
                    <Button onClick={() => removeItem(data)} >
                        <span>&times;</span>
                    </Button>
                </Cost>
            </div>
        </Card>
    );
};

export default Item;

const Card = styled.div`
    display: flex;
    align-items: center;
  
    padding: 16px 24px 16px 16px;
    @media(max-width: 768px){
        padding: 12px;
    }
    img{
        width: 120px;
        height: 120px;
        margin-right: 16px;
        @media(max-width: 768px){
            width: 84px;
            height: 84px;
        }
    }
    .row{
        flex: 1;
            @media(max-width: 768px){
             flex-direction: column;
             justify-content: flex-start;
             align-items: flex-start;
    }
    }
`

const Content = styled.div`
    p{
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 8px;
        @media(max-width: 1289px){
            font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1289 - 768)));
        }
        @media(max-width: 768px){
            font-size: 14px;
        }

    }
    span{
        font-size: 16px;
        @media(max-width: 1289px){
            font-size: calc(12px + (16 - 12) * ((100vw - 768px) / (1289 - 768)));
        }
        @media(max-width: 768px){
            font-size: 12px;
        }
    }
`

const Cost = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto;
    @media(max-width: 768px){
        margin-left: 0;
        justify-content: space-between;
     }
     @media(max-width: 449px){
        gap:30px;
     }
`

const Price = styled.span`
    display: flex;
    white-space: nowrap;
    @media(max-width: 768px){
        margin-left: auto;
       
    }
`

const Button = styled.button`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        margin-bottom: 2px;
        transition: color 0.2s ;
        &:hover{
            color: #1e1e1e;
        }
        
    }
`