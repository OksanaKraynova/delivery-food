import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { addToCart } from '../reducers/cartReducer';

const DopCard = ({ data }) => {
    const dispatch = useDispatch()

    const addOrder = item => {
        dispatch(addToCart(item))
    }
    
    return (
        <Wrapper className='card'>
            <Image>
                <img src={data.image} alt='' />
            </Image>

            <Text>
                <span>{data.name}</span>
                <button className='btn btn__small' onClick={() => addOrder(data)} >{data.cost} ₽</button>
            </Text>
        </Wrapper>
    );
};

export default DopCard;

const Wrapper = styled.a`
    width: 190px;
    display: flex;
    height: 349px ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 768px){
            flex-direction: row;
            width: 310px;
            height: 84px;
        }
    
    
    span{
        display: inline-block;
        font-weight: 600;
        font-size: 18px;
        margin: 0px 0px 12px 0px;
        text-align: center;
        flex: 1;
        @media(max-width: 1289px){
            font-size: calc(14px + (18 - 14) * ((100vw - 768px) / (1289 - 768)));
        }
            @media(max-width: 768px){
            text-align: left;
            margin-bottom: 10px;
            font-size: 14px;
        }
    }
   
    button{
        /* max-width: 158px; */
        margin-top: auto;
        width: 100%;
        @media(max-width: 768px){
            height: 32px;
            background: #FFEEE2;
            font-size: 14px;
            line-height: 18px;
            color: #FF7010;
            padding: 7px 16px;
            max-width: 73px;
            
        }
    }
`

const Image = styled.div`
padding: 10px 10px 0px 10px;
img{
        width: 170px;
        height: 170px;
        @media(max-width: 768px){
            width: 60px;
            height: 60px;
        }
    }
`
const Text = styled.div`
 padding: 16px;
       flex: 1;
       width:100%;
        display: flex;
        flex-direction: column;
`