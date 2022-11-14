import React from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Promo = () => {
    return (
        <Wrapper>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 1.1,
                        spaceBetween: 20
                    },
                    359: {
                        slidesPerView: 1.2,
                      
                    },
                    389: {
                        slidesPerView: 1.4,
                      
                    },
                    469: {
                        slidesPerView: 1.6,
                    },
                    524: {
                        slidesPerView: 1.8,
                                         },
                    630: {
                        slidesPerView: 2.2,
                    },
                    712: {
                        slidesPerView: 2.5,
                    },
                    859: {
                        slidesPerView: 2.8,
                    },
                    998: {
                        slidesPerView: 3.2,
                    },
                    1105: {
                        slidesPerView: 3.5,
                        spaceBetween: 20
                    },
                    1299: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                }}>
                <SwiperSlide>
                    <Card>
                        <img alt='' src='/promo/1.png' />
                        <span>3 средние пиццы <br /> от 999 рублей</span>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <img alt='' src='/promo/2.png' />
                        <span>Кэшбек 10% на <br /> самовывоз (доставка)</span>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <img alt='' src='/promo/1.png' />
                        <span>3 средние пиццы  <br /> от 999 рублей</span>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <img alt='' src='/promo/2.png' />
                        <span>Кэшбек 10% <br /> на самовывоз (доставка)</span>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    );
};

export default Promo;

const Wrapper = styled.div`
    display: flex;
    gap: 30px;
`
const Card = styled.div`
    display: flex;
    width: 300px;
    height: 343px;
    position: relative;
    @media(max-width:768px){
        width: 280px;
        height: 320px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    span{
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: #ffffff;
        line-height: 1.4;
    }
`