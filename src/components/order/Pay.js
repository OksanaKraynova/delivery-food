import React from 'react';

const Pay = () => {
    return (
        <div className='block-form'>
                <span className='title-form'>Оплата</span>
                <div className='row'>
                    <label className='label-form'>
                        <input type='radio' className='radio-btn' name='pay' />
                        <div className='fake-check'></div>
                        <span className='black'>Наличными</span>
                    </label>
                    <label className='label-form'>
                        <input type='radio' className='radio-btn' name='pay' />
                        <div className='fake-check'></div>
                        <span className='black'>Картой</span>
                    </label>
                    <label className='label-form'>
                        <input type='radio' className='radio-btn' name='pay' />
                        <div className='fake-check'></div>
                        <span className='black'>Apple Pay</span>
                    </label>
                </div>
            </div>
    );
};

export default Pay;