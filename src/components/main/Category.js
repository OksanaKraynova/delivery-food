import React from 'react';
import styled from 'styled-components'

const Category = () => {
    return (
        <Row>
            <Card href='#'>
                <Image className='fire'></Image>
                <span>Акции</span>
            </Card>
            <Card href='#pizza'>
                <Image className='pizza'></Image>
                <span>Пицца</span>
            </Card>
            <Card href='#rolls'>
                <Image className='sushi'></Image>
                <span>Суши</span>
            </Card>
            <Card href='#drinks'>
                <Image className='drinks'></Image>
                <span>Напитки</span>
            </Card>
            <Card href='#snack'>
                <Image className='snack'></Image>
                <span>Закуски</span>
            </Card>
            <Card href='#combo'>
                <Image className='combo'></Image>
                <span>Комбо</span>
            </Card>
            <Card href='#desert'>
                <Image className='desert'></Image>
                <span>Десерты</span>
            </Card>
            <Card href='#sauce'>
                <Image className='sauce'></Image>
                <span>Соусы</span>
            </Card>


        </Row>
    );
};

export default Category;

const Row = styled.div`
    display: flex;
   gap: 30px;
    justify-content: space-between;
    margin-bottom: 30px;
    @media(max-width: 1289px){
      gap: calc(12px + (30 - 12) * ((100vw - 768px) / (1289 - 768)));
      overflow-x: scroll;
      &::-webkit-scrollbar {
        width: 0px;
      }
    &::-webkit-scrollbar-thumb {
           background-color: transparent;
      }
      &::-webkit-scrollbar-track {
          display: none;
              }
    }
    @media(max-width: 768px){
      gap: 12px;
    }
`
const Card = styled.a`
    border: 1px solid #F0F0F0;
    border-radius: 12px;    
    flex: 0 0  135px;
    max-width: 135px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 18px;
    transition: all .15s ease-in-out;
    @media(max-width: 768px){
        flex-direction: row;
        padding: 8px 12px ;
        height: 40px;
       flex: 0 0 auto;
       align-items: center;
  
    }
    .fire{
        background: url(../icons/fire1.svg) center center / cover no-repeat;
    }
    .pizza{
        background: url(../icons/pizza1.svg) center center / cover no-repeat;
    }
    .sushi{
        background: url(../icons/sushi1.svg) center center / cover no-repeat;
    }
    .fire{
        background: url(../icons/fire1.svg) center center / cover no-repeat;
    }
    .drinks{
        background: url(../icons/drink1.svg) center center / cover no-repeat;
    }
     .snack{
        background: url(../icons/snack1.svg) center center / cover no-repeat;
    }
    .combo{
        background: url(../icons/combo.svg) center center / cover no-repeat;
    }
    .desert{
        background: url(../icons/desert1.svg) center center / cover no-repeat;
    }
    .sauce{
        background: url(../icons/sauce1.svg) center center / cover no-repeat;
    }
    &:hover{
        -webkit-box-shadow: 0px 1px 8px -1px rgba(34, 60, 80, 0.23);
        -moz-box-shadow: 0px 1px 8px -1px rgba(34, 60, 80, 0.23);
        box-shadow: 0px 1px 8px -1px rgba(34, 60, 80, 0.23);
        span{
            color: #E23535;
        }
        .fire{
        background: url(../icons/fire2.svg) center center / cover no-repeat;
    }
    .pizza{
        background: url(../icons/pizza2.svg) center center / cover no-repeat;
    }
    .sushi{
        background: url(../icons/sushi2.svg) center center / cover no-repeat;
    }
    .fire{
        background: url(../icons/fire2.svg) center center / cover no-repeat;
    }
    .drinks{
        background: url(../icons/drink2.svg) center center / cover no-repeat;
    }
     .snack{
        background: url(../icons/snack2.svg) center center / cover no-repeat;
    }
    .combo{
        background: url(../icons/combo2.svg) center center / cover no-repeat;
    }
    .desert{
        background: url(../icons/desert2.svg) center center / cover no-repeat;
    }
    .sauce{
        background: url(../icons/sauce2.svg) center center / cover no-repeat;
    }
    }
`

const Image = styled.div`
    width: 32px;
    height: 32px;
   background-color: red;
   margin-bottom: 8px;
   transition: background 0.15s ease-in-out;
   @media(max-width: 768px){
       width: 24px;
       height: 24px;
       margin: 0 8px 0 0 ;
   }
    `