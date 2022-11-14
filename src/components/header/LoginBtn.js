import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'


const LoginBtn = ({user}) => {
   
    return (
        <Btn>
            {
                user ? <img alt='user' src={user.photoURL} /> :
                <img alt='user' src='/icons/user.svg' />
            }
           
           {
                user ? <span>{user.displayName}</span> : <NavLink to='login'>Войти в аккаунт</NavLink>
                }
            
        </Btn>
    );
};
const mapStateToProps = state => {
    return {user: state.userState.user}
}
export default connect(mapStateToProps)(LoginBtn);

const Btn = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    img{
        margin-right: 8px;
        height: 20px;
        border-radius: 50%;
    }
`