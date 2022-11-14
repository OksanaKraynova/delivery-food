import React from 'react';
import styled from 'styled-components'
import Category from './Category';
import CheckAddress from './CheckAddress';
import Promo from './Promo';

const Top = () => {
    return (
        <Wrapper>
            <Category />
            <Promo />
            <CheckAddress />
        </Wrapper>
    );
};

export default Top;

const Wrapper = styled.div`
    padding-top: 30px;
`