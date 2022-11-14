import React from 'react';

const Contacts = () => {
    return (
        <div className='block-form'>
                <span className='title-form'>О вас</span>
                <div className='row'>
                    <label className='label-text label-form'>
                        Имя*
                        <input className='input' type='text' placeholder='Имя' />
                    </label>
                    <label className='label-text label-form'>
                        Номер телефона*
                        <input className='input' type='tel' placeholder='+7' />
                    </label>
                    <label className='label-text label-form'>
                        Почта
                        <input className='input' type='email' placeholder='mail@mail.ru' />
                    </label>
                </div>
            </div>
    );
};

export default Contacts;