import React from "react";
import './header.css';
import profilee from '../../assets/profilee.jpg';
import Typical from "react-typical";
import { SocialIcon } from "react-social-icons";

const Header = () => {
    return (
        <div className="portfolio__header section__padding" id="home">
            <div className="portfolio__header-content">
                <h1 className="gradient__text">Suyash Bhadani</h1>
                <div className="roles">
                    <span className="primary-text">
                        <p>
                            <Typical
                                steps={[
                                    "Software Engineer",
                                    1000,
                                    "Associate Software Engineer",
                                    1000,
                                    "Engineer Trainee",
                                    1000,
                                    "Intern",
                                    1000,
                                ]}
                                loop={Infinity}
                            />
                        </p>
                    </span>
                </div>
                <div className="subtext">
                    <span>Currently working for One Advanced building CRM
                    </span>
                </div>
                <div className="resume">
                    <a href="resume.pdf" download="Suyash.pdf">
                        <button className="btn highlighted-btn">Download CV</button>
                    </a>
                </div>
                <div className="socials">
                    <div className="linkedin">
                        <SocialIcon url="https://www.linkedin.com/in/suyashbhadani/" bgColor="#9d95b8" />
                    </div>
                    <div className="instagram">
                        <SocialIcon url="https://www.instagram.com/_suyash_21/" bgColor="#9d95b8" />
                    </div>
                    {/* <div className="twitter">
                        <SocialIcon url="https://twitter.com/PrankishorT" bgColor="#9d95b8" />
                    </div> */}
                </div>
            </div>
            <div className="circle">
                <div className="portfolio__header-image">
                    <img src={profilee} alt="profile" />
                </div>
            </div>

        </div>
    )
}

export default Header