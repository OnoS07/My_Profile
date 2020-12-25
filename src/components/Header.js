import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HeaderTop from '../images/header-top.png';

function Header(props){
    return(
        <header>
            <img  src= {HeaderTop} className= "header-image" />
            <ul className = "nav-bar">
                <AnchorLink offset = "100" href = "#top">
                    <li className = "nav-item">Top</li>
                </AnchorLink>
                <AnchorLink offset = "100" href = "#about">
                    <li className = "nav-item">About</li>
                </AnchorLink>
                <AnchorLink offset = "100" href = "#skill">
                    <li className = "nav-item">Skill</li>
                </AnchorLink>
                <AnchorLink offset = "100" href = "#work">
                    <li className = "nav-item">Work</li>
                </AnchorLink>
                <AnchorLink offset = "100" href = "#contact">
                    <li className = "nav-item">Contact</li>
                </AnchorLink>
            </ul>
        </header>
    )
};

export default Header;