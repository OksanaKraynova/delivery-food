import React from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from "swiper";
import "swiper/css";
import DopCard from './DopCard';

const Slider = ({ title, group }) => {
    return (
        <Wrapper>
            <p>{title}</p>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                keyboard={true}
                navigation={true}
                modules={[Navigation, Keyboard]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    349: {
                        slidesPerView: 1.1,
                        spaceBetween: 20
                    },
                    415: {
                        slidesPerView: 1.3,
                        spaceBetween: 20
                    },
                    479: {
                        slidesPerView: 1.5,
                        spaceBetween: 20
                    },
                    569: {
                        slidesPerView: 1.8,
                        spaceBetween: 20
                    },
                    659: {
                        slidesPerView: 2.1,
                        spaceBetween: 20
                    },

                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },

                    998: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },

                }}>
                {group.map(item => (
                    <SwiperSlide key={item.id}>
                        <DopCard data={item} />
                    </SwiperSlide>
                ))}

            </Swiper>

        </Wrapper>
    );
};

export default Slider;

const Wrapper = styled.div`
    margin-top: 30px;
    position: relative;
    @media(max-width: 998px){
        max-width: 710px;
        margin: 0 auto;
        margin-top: 30px;
    }
    @media(max-width: 849px){
        max-width: 600px;
        margin: 0 auto;
        margin-top: 30px;
    }
    @media(max-width: 768px){
        max-width: 100%;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #F0F0F0;
    }
    p{
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 24px;
        @media(max-width: 1289px){
            font-size: calc(18px + (24 - 18) * ((100vw - 768px) / (1289 - 768)));
        }
        @media(max-width: 768px){
            font-size: 18px;
            margin-bottom: 16px;
        }
    }
    .swiper{
        position: static;
        
        
    }
    .swiper-wrapper{
        max-width: 850px;
        display: flex;
        align-items: stretch;
    }
    .swiper-slide{
        
    }
    .swiper-button-next, .swiper-button-prev{
        width: 40px;
        height: 40px;
        position: absolute;
        top: 150px;
        z-index: 9;
    }
    
    .swiper-button-next{
        background: url(../icons/next.svg);
        right: -60px;
        @media(max-width: 768px){
            display: none;
        }
    }
    .swiper-button-prev{
        background: url(../icons/prev.svg);
        left: -60px;
        @media(max-width: 768px){
            display: none;
        }
    }
`