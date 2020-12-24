import React from 'react';
import Title from './Title.js';

import {ReactComponent as Github} from '../images/github-icon.svg';
import {ReactComponent as Gmail} from '../images/gmail.svg';
import {ReactComponent as Wantedly} from '../images/wantedly_logo.svg';

const ContactItems = [
    {title: "Github", text: "OnoS07", image: Github},
    {title: "Wantedly", text: "Active", image: Wantedly},
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
                                <item.image className="image" /><br />
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