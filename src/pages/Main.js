import React, { useState } from 'react';
import Header from '../components/header/Header';
import Block from '../components/main/Block';
import Top from '../components/main/Top';
import { deserts } from '../db/deserts';
import { pizzas } from '../db/pizzas';
import { snack } from '../db/snack';
import { sushi } from '../db/sushi';
import { drinks } from '../db/drinks';
import { sauce } from '../db/sauce';
import { combo } from '../db/combo';
import CardProduct from '../components/modal/CardProduct';
const Main = () => {

    const [modal, setModal] = useState(false)
    return (
        <div className='container'>
            <Top />
            <Block name={'Пицца'} goods={pizzas} group='pizza' active={setModal} />
            <Block name={'Роллы'} goods={sushi} group='rolls' active={setModal}  />
            <Block name={'Закуски'} goods={snack} group='snack' active={setModal} />
            <Block name={'Десерты'} goods={deserts} group='desert' active={setModal}  />
            <Block name={'Напитки'} goods={drinks} group='drinks' active={setModal} />
            <Block name={'Соусы'} goods={sauce} group='sauce' active={setModal} />
            <Block name={'Комбо'} goods={combo} group='combo' active={setModal} />
            <CardProduct active={modal } setActive={setModal}  />
        </div>
    );
};

export default Main;