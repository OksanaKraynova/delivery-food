import React from 'react';
import styled from 'styled-components'
import Product from '../Product';

const Block = ({name, goods, group, active}) => {
    return (
        <Wrapper name={group} className='container'>
            <Header>
                <span className='title'>{name}</span>
              
            </Header>
            <Body>
              {goods.map(item => (
                  <Product key={item.name} name={item.name} description={item.description} cost={item.cost} image={item.image} label={item.label} active={active} id={item.id} cartQuantity={item.cartQuantity}/>
              ))}
            </Body>
        </Wrapper>
    );
};

export default Block;

const Wrapper = styled.a`
display: block;
margin-bottom: 48px;
cursor: default;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Btn = styled.button`
    height: 40px;
    width: 126px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 6px;
    img{
        margin-right: 8px;
        width: 16px;
        height: 16px;
    }
`

const Body = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 32px;
    @media(max-width: 1289px){
      gap: calc(12px + (30 - 12) * ((100vw - 768px) / (1289 - 768)));
              }
    @media(max-width: 768px){
      gap: 12px;
    }
`