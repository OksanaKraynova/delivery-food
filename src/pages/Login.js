import React from 'react';
import { signInWithPopup } from "firebase/auth";
import styled from 'styled-components'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const signIn = () => {
        signInWithPopup(auth, provider)
        navigate('/')
    }
    return (
        <Wrapper className='container'>
            <span>Вход в аккаунт</span>
            <p>Сможете быстро оформлять заказы, <br /> использовать бонусы</p>
            <button onClick={signIn} className='btn btn__big'>Войти</button>
            <Text>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</Text>
        </Wrapper>
    );
};

export default Login;



const Wrapper = styled.div`
    background: #F9F9F9;
    border-radius: 24px;
    padding: 60px 0;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    @media(max-width: 998px){
        width: 80%;
    }
    span{
        font-weight: 600;
        font-size: 32px;
        @media(max-width: 768px){
            font-size: 28px;
        }
    }
    p{
        margin: 16px 0px 20px 0px;
        line-height: 1.4;
    }
    button{
        width: 320px;
        @media(max-width: 768px){
            width: 280px;
                }
    }
`

const Text = styled.p`
    font-size: 14px;
    line-height: 18px;
    opacity: 0.4;
    max-width: 300px;
    @media(max-width: 768px){
            font-size: 12px;
            line-height: 16px;
        }
`


const Close = styled.button`
    position: absolute;
    right: -200px;
    top: 0;
    @media(max-width: 768px){
        right: -10px;
     img{ width: 24px; 
      height: 24px;}
      }
`