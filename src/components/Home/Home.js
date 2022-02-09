import React from 'react';

import HomeMain from "./HomeMain";
import HomeThreeColumns from "./HomeThreeColums";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelp from "./HomeHelp";
import HomeContact from "./HomeHContact";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

const Home = () => {
    return (
        <div>
            <header className="headerWrapper">
                <div className="headerMenu">
                    <HomeHeader/>
                    <HomeMain/>
                </div>
            </header>
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
