import React from 'react';

const navitems = ["Top", "About", "Skill", "Work", "Contact"];

function Header(props){
    return(
        <header>
            <h1>Profile</h1>
            <ul className = "nav-bar">
                {
                    navitems.map(nav => (
                        <li className = "nav-item">
                            <span>{nav}</span>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
};

export default Header;