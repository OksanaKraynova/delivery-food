import React from 'react';
import Times from './Times';

const Tab1 = () => {
    return (
        <div>
            <div className='row'>
                <label className='label-text label-form'>
                    Улица*
                    <input className='input' type='text' placeholder='Пушкина' />
                </label>
            </div>
            <div className='second row'>
                <label className='label-form'>
                    Дом*
                    <input className='input' type='text' placeholder='1a' />
                </label>
                <label className=' label-form'>
                    Подъезд
                    <input className='input' type='number' placeholder='1' />
                </label>
                <label className=' label-form'>
                    Этаж
                    <input className='input' type='number' placeholder='1' />
                </label><label className=' label-form'>
                    Квартира
                    <input className='input' type='number' placeholder='1' />
                </label><label className=' label-form'>
                    Домофон
                    <input className='input' type='number' placeholder='11' />
                </label>
            </div>
            <p>Когда выполнить заказ?</p>
            <Times />
        </div>
    );
};

export default Tab1;