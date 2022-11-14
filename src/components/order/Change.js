import React from 'react';

const Change = () => {
    return (
        <div className='block-form'>
        <span className='title-form'>Сдача</span>
        <div className='row'>
            <label className='label-form'>
                <input type='radio' className='radio-btn' name='change' />
                <div className='fake-check'></div>
                <span className='black'>Без сдачи</span>
            </label>
            <label className='label-form'>
                <input type='radio' className='radio-btn' name='change' />
                <div className='fake-check'></div>
                <span className='black' style={{'marginRight': '10px'}}> Сдача с </span>
                <input type='number' />
            </label>
        </div>
    </div>
    );
};

export default Change;