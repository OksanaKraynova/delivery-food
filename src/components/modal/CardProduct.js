import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { addToCart } from '../../reducers/cartReducer';

const CardProduct = ({ active, setActive }) => {
    const data = useSelector(state => state.goodState.currentGood)
    const dispatch = useDispatch()

    const addOrder = item => {
        dispatch(addToCart(item))
        setActive(false)
    }
    return (
        <Wrapper className={active ? 'modal active blur' : 'modal blur'} onClick={() => setActive(false)}>
            <Container>
                <Card onClick={e => e.stopPropagation()}>
                    <Image>
                        <img alt='' src={data.image} />
                    </Image>
                    <Description>
                        <Name>{data.name}</Name>
                        <Row>
                            <p className='orange'>Итого: {data.cost} ₽</p>
                            <button onClick={() => addOrder(data)} className='btn btn__big'>В корзину</button>
                        </Row>
                    </Description>
                    {data.label && <Label className='label' >{data.label}</Label>}
                </Card>
                <Close>
                    <img className='main' alt='close' src='/icons/close2.svg' />
                    <img className='mini' alt='close' src='/icons/close.svg' />
                </Close>
            </Container>
        </Wrapper>
    );
};

export default CardProduct;

const Wrapper = styled.div`
       @media(max-width: 1199px){
        padding: 0 70px;
    }
    @media(max-width: 1199px){
        padding: 0 10px;
    }
`
const Container = styled.div`
position: relative;
width: 990px;
@media(max-width: 1199px){
    max-width: 800px;
  }
.mini{
        display: none;
    }
@media(max-width: 998px){
        gap: 12px;
        flex-direction: column;
        .main{
            display: none;
        }
        .mini{
            display: block;
        }
    }
    `

const Card = styled.div`
    background: #FFFFFF;
    border-radius: 24px;
    padding: 20px;
    flex: 0 1  990px;
    height: 580px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 60px;
    @media(max-width: 1199px){
        max-width: 800px;
        gap: calc(14px + (60 - 14) * ((100vw - 768px) / (1199 - 768)));
    }
    @media(max-width: 999px){
        height: 450px;
    }
    @media(max-width: 768px){
        padding: 10px;
        gap: 14px;
    }
    @media(max-width: 499px){
        flex-direction: column;
    }
`

const Image = styled.div`
   img{
        width: 450px;
        height: 450px;
        @media(max-width: 1209px){
            width: 300px;
            height: 300px;
        }
        @media(max-width: 789px){
            width: 260px;
            height: 260px;
        }
   }
`

const Description = styled.div`
   flex: 0 1 480px;
   @media(max-width: 789px){
    width: 100%;
   }
   @media(max-width: 499px){
text-align: center;
   }
`
const Label = styled.span`
   position: absolute;
   top: 32px;left: 0;
`

const Close = styled.button`
    position: absolute;
    right: -60px;
    top: 0;
    @media(max-width: 1199px){
        right: -50px;
    }
    @media(max-width: 998px){
        right: 30px;
        top: 30px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 789px){
        padding: 12px 0;
        border-top: 1px solid #F0F0F0;
    }
    @media(max-width: 379px){
       gap: 12px;
    }
    p{
        font-weight: 600;
        font-size: 20px;    
    }
    button{ 
        width: 155px;
        margin: 16px 0px 0px 0px;
        @media(max-width: 499px){
            margin: 0 auto;
            margin-top: 14px;
        }
    }
`

const Name = styled.p`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 16px;
    @media(max-width: 789px){
        font-size: 18px;
    }
    @media(max-width: 379px){
        text-align: center;
    }
`