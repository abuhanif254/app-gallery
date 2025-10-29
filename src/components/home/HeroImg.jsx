import React from 'react';
import heroImg from '../../assets/hero.png'


const HeroImg = () => {
    return (
        <div className='relative min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center'>
            <img src={heroImg} alt="" />
        </div>
    );
};

export default HeroImg;