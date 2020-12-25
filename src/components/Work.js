import React from 'react';
import Title from './Title.js';
import Delitable from '../images/delitable.png';
import Profile from '../images/profile.png';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const WorkItems = [
    {title: "Delitable", skill: "Ruby on Rails", image: Delitable},
    {title: "Profile", skill: "React", image: Profile}
]

function Work(props){
    return(
        <div className = "section" id = "work">
            <Title title = "Work" />
            <div className = "contents">
                    {
                        WorkItems.map(item => (
                            <div className = "work-content">
                                <img  src={item.image} className = "work-image" />
                                <h2>{item.title}</h2>
                                <span>Skill：{item.skill}</span>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
};

export default Work;