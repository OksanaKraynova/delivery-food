import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'


const Good = () => {
    const cart = useSelector(state => state.cartState)
    
    return (
        <>

            {cart.cartItems.length === 0 ? <p>Вы пока ничего не выбрали</p>
                :
                <>
                    {cart.cartItems.map(item => (
                        <Wrapper key={item.id}>
                            <img alt='' src={item.image}  />
                            <Info>
                                <Name>{item.name}</Name>
                                <p>{item.description}</p>
                                <Row className='orange'>
                                    
                                    <span>{item.cost} ₽</span>
                                </Row>
                            </Info>
                        </Wrapper>
                    ))}
                </>
            }
        </>
    );
};

export default Good;

const Wrapper = styled.div`
    padding: 16px;
    border: 1px solid #F0F0F0;
    border-radius: 12px;  
    display: flex;
    gap: 16px;
    @media(max-width: 768px){
        padding: 12px;
    }
    img{
        width: 94px;
        height: 94px;
        @media(max-width: 768px){
            width: 84px;
            height: 84px;
        }
    }  
`

const Info = styled.div`
    p{
        margin: 8px 0px 12px 0px;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        -ms-line-clamp: 1;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        display: -webkit-box;
        display: box;
        word-wrap: break-word;
        -webkit-box-orient: vertical;
        box-orient: vertical;
        @media(max-width: 768px){
            font-size: 12px;
            margin-bottom: 10px;
        }
    }
`
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
`

const Name = styled.span`
    font-weight: 600;
    font-size: 16px;    
    @media(max-width: 768px){
        font-size: 14px;
    }
`

