import React from 'react';

import HomeSection1 from "./HomeSection1";
import HomeThreeColumns from "./HomeThreeColums";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelp from "./HomeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

const Home = () => {
    return (
        <div>
            <HomeSection1/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeHelp/>
            <HomeContact/>
            <HomeFooter/>
        </div>
    );
};

export default Home;
