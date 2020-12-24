import React from 'react';
import Title from './Title.js';
import Rating from '@material-ui/lab/Rating';
import {ReactComponent as HTML} from '../images/html-5.svg';
import {ReactComponent as CSS} from '../images/css-3.svg';
import {ReactComponent as JS} from '../images/javascript.svg';
import {ReactComponent as JQ} from '../images/jquery.svg';
import {ReactComponent as ReactIcon} from '../images/react.svg';
import {ReactComponent as Ruby} from '../images/ruby.svg';
import {ReactComponent as Rails} from '../images/rails.svg';
import {ReactComponent as AWS} from '../images/aws.svg';
import {ReactComponent as Docker} from '../images/docker-icon.svg';
import {ReactComponent as CircleCI} from '../images/circleci.svg';
import {ReactComponent as MySQL} from '../images/mysql.svg';
import {ReactComponent as Github} from '../images/github-icon.svg';
import {ReactComponent as VScode } from '../images/visual-studio-code.svg';
import {ReactComponent as Slack } from '../images/slack-icon.svg';

const ThreeStar = <Rating value={3} max={3} readOnly />
const TwoStar = <Rating value={2} max={3} readOnly />
const OneStar = <Rating value={1} max={3} readOnly />

const SkillItems = [
    {name: "HTML", image: HTML, raty: ThreeStar },
    {name: "CSS", image: CSS, raty: ThreeStar},
    {name: "JavaScript", image: JS, raty: OneStar},
    {name: "jQuery", image: JQ, raty: TwoStar},
    {name: "React", image: ReactIcon, raty: TwoStar},
    {name: "Ruby", image: Ruby, raty: ThreeStar},
    {name: "Rails", image: Rails, raty: ThreeStar},
    {name: "AWS", image: AWS, raty: TwoStar},
    {name: "Docker", image: Docker, raty: OneStar},
    {name: "CircleCI", image: CircleCI, raty: OneStar},
    {name: "MySQL", image: MySQL, raty: TwoStar},
    {name: "Github", image: Github, raty: ThreeStar},
    {name: "VScode", image: VScode, raty: TwoStar},
    {name: "Slack", image: Slack, raty: ThreeStar},

    
];

function Skill(props){
    return(
        <div className = "section" id = "skill">
            <Title title = "Skill" />
            <div className = "contents skill-contents">
                {
                    SkillItems.map(item => (
                        <div className = "skill-content">
                            <item.image className="image" /><br />
                            <span>{item.name}</span><br />
                            <span>{item.raty}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Skill;