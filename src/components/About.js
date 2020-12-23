import React from 'react';
import Title from './Title.js';


const AboutItems = [
    {title: "Name", text: "Soichiro Ono"},
    {title: "Birth", text: "1994/07/08"},
    {title: "University", text: "Kyoto Sangyo Univ."},
    {title: "About", text: "Sales(2017/04~2020/02)"}
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