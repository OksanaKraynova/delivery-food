import React from 'react';
import Times from './Times';

const Tab2 = () => {
    return (
        <div>
            <label className='label-text label-form'>
                Ресторан*
                <input className='input' type='text' placeholder='Выберите ресторан' />
            </label>
            <p className='text'>Когда выполнить заказ?</p>
            <Times />
        </div>
    );
};

export default Tab2;