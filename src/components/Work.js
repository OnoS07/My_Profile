import React from 'react';
import Title from './Title.js';
import Delitable from '../images/delitable.png';
import Profile from '../images/profile.png';

import Button from '@material-ui/core/Button';

const WorkItems = [
    {title: "Delitable", skill: "Ruby on Rails", image: Delitable, web: "http://delitable.work/", git:"https://github.com/OnoS07/Delitable"},
    {title: "Profile", skill: "React", image: Profile, web:"https://elastic-ride-866e1b.netlify.app/", git: "https://github.com/OnoS07/Profile-site"}
]

function Work(props){
    return(
        <div className = "section" id = "work">
            <Title title = "Work" />
            <div className = "contents">
                    {
                        WorkItems.map(item => (
                            <div className = "work-content">
                                <img  src={item.image} className = "work-image"/>
                                <h2>{item.title}</h2>
                                <span>Main-Skill：{item.skill}</span><br />
                                <div className = "button-contents">
                                    <Button variant="contained" color="secondary" href= {item.web}>Web</Button>
                                    <Button variant="contained" color="primary" href= {item.git}>Github</Button>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
};

export default Work;