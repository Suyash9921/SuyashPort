import React from "react";
import './experience.css';
import Jobs from '../../containers/jobs/Jobs';

const jobsData = [
    {
        title: 'One Advanced',
        year: 'Jan 2023 - Present',
        designation: 'Software Engineer',
        text:
        <div className="ExperienceStyle"> 
            <ul>
                <li>Responsible for developing low/pro code solutions in order to maintain and develop the CRM system and simplify the integration of the CRM software with other Legal products.</li>
                <li>Implemented the ORM functionality throughout product to eliminate duplicate SQL statements that were scattered across the product. </li>
            </ul>
        </div>

    },
    {
        title: 'One Advanced',
        year: 'July 2021 - Dec 2022',
        designation: 'Associate Software Engineer',
        text: <ul>
            <li>Collaborated with cross-functional teams understand the integration of the CRM with other products and deliver high-quality, user-friendly desktop application.</li>
            <li>Refactored code to reduce security hotspot warnings, vulnerabilities and code smells by 75% with over 80% code coverage, highlighted by SonarQube</li>
        </ul>
    },
    {
        title: 'One Advanced ',
        year: 'Jan 2021 - June 2021',
        designation: 'Trainee Engineer',
        text: 'Hands on training in MySQL and Core Java.',
    },
];

const Experience = () => {
    return (
        <div className="portfolio__experience section__padding" id="experience">
            <div className="portfolio__experience-header">
                <h1 className="gradient__text">Experience</h1>
            </div>
            <div className="portfolio__jobs-container">
                {jobsData.map((item, index) => (
                    <Jobs title={item.title} year={item.year} designation={item.designation} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Experience;