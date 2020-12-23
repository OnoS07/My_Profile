import React from 'react';
import Title from './Title.js';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CakeIcon from '@material-ui/icons/Cake';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const NameIcon = <AccountCircleIcon />
const BirthIcon = <CakeIcon />
const UnivIcon = <SchoolIcon />
const CareerIcon = <WorkIcon />

const AboutItems = [
    {title: "Name", text: "Soichiro Ono", icon: NameIcon },
    {title: "Birth", text: "1994/07/08", icon: BirthIcon},
    {title: "University", text: "Kyoto Sangyo Univ.", icon: UnivIcon},
    {title: "Career", text: "Sales(2017/04~2020/02)", icon: CareerIcon}
];

class About extends React.Component {
    render() {
        return(
            <div className = "section" id = "about">
                <Title title = "About" />
                <div className = "contents">
                    {
                        AboutItems.map(item => (
                            <div className = "about-content">
                                {item.icon}
                                <h3>{item.title}</h3>
                                <span>{item.text}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default About;