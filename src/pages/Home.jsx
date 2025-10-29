import React from 'react';
import Banner from '../components/home/Banner';
import HeroImg from '../components/home/HeroImg';
import Facts from '../components/home/Facts';
import TrendingApps from '../components/home/TrendingApps';


const Home = () => {
    return (
        <div>
            <Banner />
            <HeroImg />
            <Facts />
            <TrendingApps />
        </div>
    );
};

export default Home;