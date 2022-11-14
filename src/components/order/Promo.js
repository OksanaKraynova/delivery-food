import React from 'react';
import styled from 'styled-components'

const Promo = ({totalAmount}) => {
    return (
        <Wrapper >
            <Form>
                <input type='text' placeholder='Промокод' />
                <button className='btn'>
                    <img alt='send' src='/icons/send.svg' />
                </button>
            </Form>
            <span className='orange'>Итого: {totalAmount} ₽ </span>
        </Wrapper>
    );
};

export default Promo;

const Wrapper = styled.div`
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
        span{
        font-weight: 600;
        font-size: 20px;  
        @media(max-width: 768px){
                    font-size: 18px;
                }
        }
    @media(max-width: 768px){
        flex-direction: column;
        gap: 16px;
        background: #f9f9f9;
        border-radius: 0px;
        border: none;
        border-top: 1px solid #F0F0F0;
        border-bottom: 1px solid #F0F0F0;
        padding: 20px 0px ;
        margin-top: 4px;
    }
`

const Form = styled.form`
        border: 1px solid #F0F0F0;
        border-radius: 6px;
        height: 48px;
        display: flex;
        align-items: center;
        padding-left: 16px;
        width: 320px;
        background-color: #fff;
        @media(max-width: 768px){
            width: 100%;
        }
        input{
            flex: 1;
            padding: 5px 0;
            
            &::placeholder{
                font-size: 16px;
                line-height: 22px;
                color: #A5A5A5;
                @media(max-width: 768px){
                    font-size: 14px;
                }
            }
        }
        button{
            width: 48px;
            height: 48px;
        }
`