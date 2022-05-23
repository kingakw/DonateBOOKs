import React from 'react';

import HomeSection from "./HomeSection";
import HomeFourStepsColumns from "./HomeFourStepsColums";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelp from "./HomeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

const Home = () => {
    return (
        <div>
            <HomeSection/>
            <HomeFourStepsColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeHelp/>
            <HomeContact/>
            <HomeFooter/>
        </div>
    );
};

export default Home;
