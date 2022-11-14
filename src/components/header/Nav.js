import React, {useState} from 'react';
import styled from 'styled-components'
import List from './List'
const Nav = () => {
    const [menu, setMenu] =  useState(false)
  
    return (
        <Wrapper>
            <Container>
                <li>
                    <a href='#'>Акции</a>
                </li>
                <li>
                    <a href='#pizza'>Пицца</a>
                </li>
                <li>
                    <a href='#rolls'>Суши</a>
                </li>
                <li>
                    <a href='#drinks'>Напитки</a>
                </li>
                <li>
                    <a href='#snack'>Закуски</a>
                </li>
                <li>
                    <a href='#combo'>Комбо</a>
                </li>
                <li>
                    <a href='#desert'>Десерты</a>
                </li>
                <li>
                    <a href='#sauce'>Соусы</a>
                </li>
                <DroppBtn onClick={() => setMenu(!menu)}>
                    <a>Другое
                        <svg id='arrow' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_215_17942)">
                                <path d="M16 4.35005C16 4.54186 15.9289 4.73385 15.7869 4.88029L8.5142 12.3802C8.23002 12.6733 7.76984 12.6733 7.48584 12.3802L0.213135 4.88029C-0.0710456 4.58723 -0.0710456 4.11267 0.213135 3.8198C0.497316 3.52693 0.957497 3.52674 1.2415 3.8198L8.00002 10.7895L14.7585 3.8198C15.0427 3.52674 15.5029 3.52674 15.7869 3.8198C15.9289 3.96624 16 4.15823 16 4.35005Z" />
                            </g>

                        </svg>
                    </a>
                    <ListWrapper className={!menu ? '' : 'show'}>
                        <List />
                    </ListWrapper>

                </DroppBtn>
            </Container>
        </Wrapper>
    );
};

export default Nav;

const Wrapper = styled.nav`
    /* margin: 0 auto 0 64px ; */

`
const ListWrapper = styled.div`
        position: absolute;
        width: 285px;   
        top: 48px;
        right: -100px;
        display: none;
        &.show{
            display: block;
        }
`
const Container = styled.ul`
    display: flex;
    gap: 32px;
       
    svg{
        margin: 0px 0px 0px 8px;
        transition: fill 0.2s ease;
        fill: #A5A5A5;
    }
    a{
      display: flex;
        transition: color 0.2s ease;
        &:hover{
            color: #FF7010;
            svg{
                fill: #FF7010;
            }
        }
    }
    @media(max-width: 1289px){
       gap: calc(16px + (32 - 16) * ((100vw - 768px) / (1289 - 768)));
    }
    @media(max-width: 998px){
        gap: 20px;
        font-size: 16px;
        flex-direction: column;
        padding: 20px;
        border-bottom: 1px solid #F0F0F0;
           }
`

const DroppBtn = styled.li`
    position: relative;
    @media(max-width: 998px){
        display: none;
    }
`