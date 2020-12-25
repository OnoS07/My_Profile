import React from 'react';
import Title from './Title.js';

import {ReactComponent as Github} from '../images/github-icon.svg';
import {ReactComponent as Gmail} from '../images/google-gmail.svg';
import {ReactComponent as Wantedly} from '../images/wantedly_mark.svg';

const ContactItems = [
    {title: "Github", text: "OnoS07", image: Github, link: "https://github.com/OnoS07"},
    {title: "Wantedly", text: "Active", image: Wantedly, link: "https://www.wantedly.com/users/140120863"},
    {title: "Gmail", text: "soichrooono@gmail.com", image: Gmail }
]

function Contact(props){
    return(
        <div className = "section" id = "contact">
            <Title title = "Contact" />
            <div className = "contents">
                    {
                        ContactItems.map(item => (
                            <div className = "contact-content">
                                <a href= {item.link} rel="noopener noreferrer">
                                    <item.image className="image" />
                                </a><br />
                                <h3>{item.title}</h3>
                                <span>{item.text}</span>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
};


export default Contact;