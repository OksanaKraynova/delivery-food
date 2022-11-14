import React from 'react';
import LoginBtn from './LoginBtn';
import styled from 'styled-components'
import List from './List';
import Contacts from '../cart/Contacts';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const Menu = ({ active, setActive }) => {
    const history = useNavigate()
    const login = (e) => {
        
        history('/login')
        document.getElementById('user-menu').classList.remove('show')
    }
    return (
        <Wrapper className={active ? 'active' : ''} onClick={() => setActive(false)}>
            <Container >
                <LoginBtnWrapper onClick={login}>
                    <LoginBtn />
                </LoginBtnWrapper>
                <Nav />
                <List />
                <ContactsWrapper>
                    <Contacts />
                </ContactsWrapper>
                <Footer onClick={e => e.stopPropagation()}>Время работы: с 11:00 до 23:00</Footer>
            </Container>

        </Wrapper>
    );
};

export default Menu;

const Wrapper = styled.div` 
    position: fixed;
    background-color: #fff;
    top: 93px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    transform: translateX(100%);
    transition: transform 0.2s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    &.active{
        transform: translateX(0%);
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const LoginBtnWrapper = styled.div`
    border-bottom: 1px solid #F0F0F0;
    border-top: 1px solid #F0F0F0;
    padding: 20px;
`
const ContactsWrapper = styled.div`
    padding: 20px;
  `

const Footer = styled.div`
     border-top: 1px solid #F0F0F0;
     color: #A5A5A5;
     text-align: center;
     padding: 16px;
     margin-top: auto;
`