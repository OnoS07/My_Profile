import React from 'react';
import TopImage from '../images/smart_dog.jpg';

function Top(props){
    return(
        <div className = "top" id = "top">
            <div className="top-content">
                <img  src={TopImage} className = "top-image" />
                <div className = "top-image-text">Welcome to My Profile</div>
            </div>
        </div>
    )
};

export default Top;