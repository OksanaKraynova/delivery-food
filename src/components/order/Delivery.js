import React, { useState } from 'react';
import styled from 'styled-components'
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Delivery = () => {
    const [activeTab, setActiveTab] = useState('tab1')
    const handleTab1 = (e) => {
        e.preventDefault()
        setActiveTab("tab1");
    };
    const handleTab2 = (e) => {
        e.preventDefault()
        setActiveTab("tab2");
    };
    return (
        <Wrapper className='block-form'>
            <Header className='row'>
                <span className='title-form'>Доставка</span>
                <Buttons>
                    <button className={activeTab === 'tab1' ? 'active' : ''} onClick={handleTab1}>Доставка</button>
                    <button className={activeTab === 'tab2' ? 'active' : ''} onClick={handleTab2}>Самовывоз</button>
                </Buttons>
            </Header>
            {
                activeTab === 'tab1' ? <Tab1 /> : <Tab2 />
            }
        </Wrapper>
    );
};

export default Delivery;

const Buttons = styled.div`
display: flex;
    button{
        background: #FFFFFF;
        border: 1px solid #F0F0F0;
        border-radius: 6px;
        width: 175px;
        height: 48px;
        font-size: 16px;
        @media(max-width: 399px){
            width: 150px;
        height: 44px;
        }
        &.active{
            color: #FFFFFF;
            background-color:#FF7010 ;
        }
    }
`

const Wrapper = styled.div`
    .second{
        margin: 16px 0;
        label{
            flex-direction: column;
            flex: 0 1 154px;
            input{
                max-width: 154px;
            }
        }
    }
    p{
        color: #A5A5A5;
        margin-bottom: 12px;
        font-size: 16px;
        line-height: 1.3;
    }
    .text{
        margin: 16px 0px 21px 0px;
    }
`

const Header = styled.div`
    margin-bottom: 24px;
    justify-content: space-between;
    @media(max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        .title-form{
            margin: 0;
        }
    }
`