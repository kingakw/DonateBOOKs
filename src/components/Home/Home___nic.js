import React from 'react';
import Header from "../HomeHeader";

const Home = ({ children }) => {
    let subComponentList = Object.keys(Home);

    let subComponents = subComponentList.map((key) => {
        return React.Children.map(children, (child) =>
            child.type.name === key ? child : null
        );
    });

    return (
        <>
            <div>
                {subComponents.map((component) => component)}
            </div>
        </>
    );
};

const Header = () => <Header />;
Home.Header = Header;

const Body = (props) => <div className='home-body'>{props.children}</div>;
Home.Body = Body;

const Footer = (props) => <div className='home-footer'>{props.children}</div>;
Home.Footer = Footer;

export default Home;
