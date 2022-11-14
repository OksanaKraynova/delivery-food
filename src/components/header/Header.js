import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Cart from '../cart/Cart';
import CartField from '../cart/CartField';
import LoginBtn from './LoginBtn';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';
import UserMenu from './UserMenu';


const Header = (props) => {
    const showUserMenu = () => {
        if (props.user) document.getElementById('user-menu').classList.toggle('show')
    }

    const [menu, setMenu] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    return (
        <Wrapper>
            <RowWrapper>
                <Row className='container '>
                    <Btn className='local'>
                        <img alt='' src='/icons/local.svg' />
                        <span>Москва</span>
                        <img alt='' src='/icons/down.svg' className='local-arrow' />
                    </Btn>
                    <a href='#check-address' className='hide'>Проверить адрес</a>
                    <div className='time' >Среднее время доставки*:00:24:19</div>
                    <Time className='hide'>Время работы: с 11:00 до 23:00</Time>
                    <LoginBtnWrapper className='hide' onClick={showUserMenu} >
                        <LoginBtn />
                        {props.user && <UserMenu />}

                    </LoginBtnWrapper>
                </Row>
            </RowWrapper>
            <RowWrapper>
                <Row className='container second'>
                    <LogoWrapper>
                        <NavLink to='/'>
                            <Logo />
                        </NavLink>
                    </LogoWrapper>
                    <MiniLogo>
                        <NavLink to='/'>
                            <img alt='logo' src='/icons/logo.svg' />
                        </NavLink>
                    </MiniLogo>
                    <NavContainer>
                        <Nav />
                    </NavContainer>
                    <CartContainer onClick={() => setCartOpen(!cartOpen)}>
                        <Cart />
                    </CartContainer>
                    <Burger onClick={() => setMenu(!menu)}>
                        {!menu ?
                            <img alt='menu' src='/icons/menu.svg' /> :
                            <img alt='menu' src='/icons/close.svg' />
                        }

                    </Burger>

                </Row>
                <Menu active={menu} setActive={setMenu} />
                <CartField active={cartOpen} setActive={setCartOpen} />
            </RowWrapper>

        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        user: state.userState.user,
    }
}



export default connect(mapStateToProps)(Header);

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 99;
`

const RowWrapper = styled.div`
 
    @media(max-width: 1299px){
        padding: 0px 10px ;
    }
    &:first-child{
        border-bottom: 1px solid #F0F0F0;
    }
     
`

const Row = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    justify-content: space-between;
        gap: 40px;
 
    .local{
        position: relative;
        padding-right: 20px;
        .local-arrow{
            position: absolute;
            right: 0;
            width: 12px;
            height: 12px;
            margin: 0;
            top: 6px;
        }
    }
    .hide{
        @media(max-width:998px){
            display: none;
        }
    }
    .time{
        @media(max-width: 768px){
        text-align: right;
        font-size: 12px;
    }
    }
`

const Btn = styled.button`
    display: flex;
    align-items: center;
    img{
        margin-right: 8px;
    }
`

const Time = styled.span`
    margin-left: auto;
`

const Burger = styled.button`
    @media(min-width: 998px){
        display: none;
    }
`

const MiniLogo = styled.div`
    display: none;
    @media(max-width: 998px){
        display: block;
    }
    @media(max-width: 768px){
        display: none;
    }
`
const LogoWrapper = styled.div`
    @media(max-width: 998px){
        display: none;
    }
    @media(max-width: 768px){
        display: block
    }
`

const NavContainer = styled.div`
    @media(max-width: 998px){
        display: none;
    }
`

const LoginBtnWrapper = styled.div`
    position: relative;
    height: 100%;
   
`
const CartContainer = styled.div`
 @media(max-width: 998px){
        margin-left: auto;
    }
    transition: transform 0.2s ease-in; 
    @media(min-width: 769px){
        &:hover{
            transform: scale(1.03);
        }
            }
    @media(max-width: 768px){
       position: fixed;
       right: 80px;
       bottom: 80px;
       z-index: 9;
    }
`