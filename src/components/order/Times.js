import React from 'react';


const Times = () => {
    return (
        <div className='row'>

            <label className='label-form'>
                <input type='radio' className='radio-btn' name='times' />
                <div className='fake-check'></div>
                <span className='black'>Как можно скорее</span>
            </label>
            <label className='label-form'>
                <input type='radio' className='radio-btn' name='times' />
                <div className='fake-check'></div>
                <span className='black'>По времени </span>
                <input type='number' />
            </label>
        </div>
    );
};

export default Times;