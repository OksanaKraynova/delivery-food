import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { clearCart, getTotals } from '../../reducers/cartReducer';
import Change from './Change';
import Contacts from './Contacts';
import Delivery from './Delivery';
import Pay from './Pay';

const FormOrder = () => {
    const cart = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    const clearAll = () =>{
        dispatch(clearCart())
    }
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    const navigate = useNavigate()
    const sendForm = e =>{
        e.preventDefault()
        navigate('/order')
        clearAll()
    }
    return (
        <Form>
            <Contacts/>
            <Delivery />
            <Pay />
            <Change />
            <div className='block-form'>
                <span className='title-form'>Комментарий</span>
                <textarea className='input' defaultValue='Есть уточнения?' />

            </div>
            <Result>
                <span className='orange'>Итого: {cart.cartTotalAmount} ₽</span>
                <button className='btn btn__big' onClick={sendForm} >Оформить заказ</button>
            </Result>
        </Form>
    );
};

export default FormOrder;

const Form = styled.form`
    margin-top: 30px;
`


const Row = styled.div`
    display: flex;
    gap: 20px;
`

const Result = styled(Row)`
    align-items: center;
    justify-content: space-between;
    span{
        font-size: 20px;
        font-weight: 600;
        @media(max-width: 768px){
            font-size: 18px;
        }
        @media(max-width: 399px){
            font-size: 14px;
        }
    }
    button{
        min-width: 178px;
        @media(max-width: 768px){
            min-width: 160px;
        }
    }
`
