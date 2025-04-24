import React from 'react';

const SkillsItem = (title, percentage,tech) => {
    return (
        <li data-aos="flip-right">
            <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
            <h6 className="skill-title">React js</h6>
            <h6 className="skill-title1">75%</h6>
            <div data-aos className="skill-bar skill-bar-react">
            </div>
        </li>
    );
};

export default SkillsItem;