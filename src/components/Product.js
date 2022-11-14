import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setCurrentGood } from '../reducers/currentGood';


const Product = ({ name, cost, description, image, label , active, id, cartQuantity }) => {
    const dispatch = useDispatch()
    const data = {name, cost, description, image, label , id , cartQuantity}
    const handleClick = () => {
        dispatch(setCurrentGood(data))
        active(true)
    }
    return (
        <>
        <Card className='card' onClick={handleClick}  >
            {label && <Label className='label'>{label}</Label>}

            <Image>
                <img alt='' src={image} />
            </Image>
            <Description>
                <Name>{name}</Name>
                {description && <p>{description}</p>}
                <Order>
                    <button className='btn btn__big'>Выбрать</button>
                    <span className='orange'>от {cost} ₽</span>
                </Order>
            </Description>
        </Card>
  
        </>
    );
};

export default Product;

const Card = styled.div`
    width: 300px;
      position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.02);
        box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.2);
    }
    @media(max-width: 998px){
        flex-direction: row;
        flex: 1 1 350px;
        padding: 12px;
    }
`
const Image = styled.div`
    width: 100%;
    height: 300px;
    padding: 10px;
    @media(max-width: 998px){
        width: 100px;
        height: 100px;
        padding: 0; 
        margin-right: 12px;
    }
    img{
        width: 100%;
        object-fit: cover;
    }
`
const Description = styled.div`
    padding:16px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    @media(max-width: 998px){
        padding: 0;
        justify-content: center; 

    }
    p{
        margin: 12px 0 0px 0;
        font-size: 16px;
        line-height: 1.3;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        -ms-line-clamp: 2;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        display: -webkit-box;
        display: box;
        word-wrap: break-word;
        -webkit-box-orient: vertical;
        box-orient: vertical;
        @media(max-width: 998px){
        margin-top: 8px;
        font-size: 12px;
    }
    }
`

const Name = styled.span`
    font-weight: 600;
    font-size: 18px;
    line-height: 1.4;
    @media(max-width: 998px){
        font-size: 14px;
    }
`

const Order = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    @media(max-width: 998px){
        margin-top: 10px;
    }
    button{
        min-width: 131px ;
        @media(max-width: 998px){
            display: none;
        }
    }
    span{
        font-weight: 600;
        font-size: 18px;
        @media(max-width: 998px){
            background-color: #FFEEE2;
            padding: 7px 16px ;
            border-radius: 6px;
            font-size: 14px;
        }
    }
`

const Label = styled.div`
    position: absolute;
    top: 20px;
    left: 0;
    @media(max-width: 998px){
        top: 8px;
    }
`