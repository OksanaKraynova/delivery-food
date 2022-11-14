import React from 'react';
import styled from 'styled-components'

const Contacts = () => {
    return (
        <Wrapper>

            <a href='tel:123456789'><img alt='phone' src='/icons/phone.svg' />+7 (926) 223-10-11</a>
            <p><img alt='' src='/icons/local.svg' />Москва, ул. Юных Ленинцев, д.99</p>
            <Social>
                <a href='https://facebook.com' target='_blank' className='facebook'> <img alt='facebook' src='/icons/facebook.svg' />Facebok</a>
                <a href='https://instagram.com' target='_blank' ><img alt='instagram' src='/icons/insta.svg' />Instagram</a>
            </Social>
        </Wrapper>
    );
};

export default Contacts;

const Wrapper = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
    @media(max-width: 768px){
        gap: 16px;
    }
    a{
        font-size: 16px;
        @media(max-width: 1289px){
            font-size: calc(14px + (16 - 14) * ((100vw - 768px) / (1289 - 768)));
        }
        @media(max-width: 768px){
font-size: 14px;
        }
    }
    a, p{
        display: flex;
        align-items: center;
        img{
            margin-right: 12px;
        }
    }
`

const Social = styled.div`
    display: flex;
    
   
    .facebook{
        margin-right: 24px;
    }
`