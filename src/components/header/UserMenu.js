import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { signInAPI, signOutAPI } from '../../action';

const UserMenu = (props) => {
    const navigate = useNavigate()
    
    const logout = async () => {
        await props.signOut()
        props.user = null
        navigate('/login')
    }
    return (
        <Wrapper id='user-menu'>
            <span className='orange'>100 бонусов</span>
            <a>История заказов</a>
            <a>Настройки</a>
            <Logout onClick={logout} >Выход из аккаунта</Logout>

        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        user: state.userState.user
    }
}

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
const Wrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    font-size: 16px;
    flex-direction: column;
    position: absolute;
    width: 285px;
    box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.1);
    bottom: -224px;
    z-index:99;
    border-radius: 12px;
    left: -70px;
    line-height: 1.3;
    display: none;
    @media(max-width: 1469px){
        left: -140px;
    }
    &.show{
        display: flex;
    }
    span{
        font-weight: 600;
        border-bottom: 1px solid #F0F0F0;
        padding: 22px 0px 16px 20px;
           }
           a{
               margin-top: 16px;
               padding-left: 20px;
           }
`

const Logout = styled.button`
    display: flex;
    color: #A5A5A5;
    padding: 16px 0px 16px 20px;
    border-top: 1px solid #F0F0F0;
    
    margin-top: 16px;
     font-size: 16px;   
`