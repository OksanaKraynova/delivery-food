import React from 'react';
import styled from 'styled-components'

const CheckAddress = () => {
    return (
        <Wrapper name='check-address'>
            <p>Проверить адрес доставки</p>
            <Row>
                <Input type='text' placeholder='Адрес' />
                <Btn className='btn btn__big'>
                    <span>Проверить</span>
                    <img alt='send' src='/icons/send.svg' />
                     </Btn>
            </Row>
        </Wrapper>
    );
};

export default CheckAddress;

const Wrapper = styled.a`
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    margin: 30px 0;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    gap: 32px;
    @media(max-width: 768px){
        flex-direction: column;
        padding: 24px 20px 20px;
        gap: 16px;
        p{
            font-size: 16px;
            font-weight: 600;
        }
    }
   
`
const Row = styled.div`
    display: flex;
    flex: 1;
    gap: 20px;
    @media(max-width: 768px){
        width: 100%;
        gap: 0;
        border: 1px solid #F0F0F0;
    }
`

const Input = styled.input`
    border: 1px solid #F0F0F0;
    border-radius: 6px;
    margin-left: auto;
    flex-grow: 1;
    height: 48px;
    padding-left: 40px;
    position: relative;
    background: url(../icons/local.svg) 12px 14px no-repeat;
    &::placeholder{
        font-size: 16px;
        color: #A5A5A5;
    }
    @media(max-width: 768px){
        border: none;
    }
    `

const Btn = styled.button`
    min-width: 150px;
    @media(max-width: 768px){
        min-width: 44px;
    }
    img{
        display: none;
    }
    @media(max-width: 768px){
        span{
            display: none;
        }
        img{
            display: block;
        }
    }
`

