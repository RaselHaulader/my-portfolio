import React, { useEffect, useState } from 'react';
import my from '../../images/my.jpg';
import myResume from '../../file/resume.pdf';
import './Banner.css';
import Navbar from '../Navbar/Navbar';

const Banner = () => {
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
          setToggle(prev => !prev); // ✅ use functional update
        }, 5000);
        return () => clearInterval(interval); // cleanup on unmount
      }, []);
    return (
        <div>
            <div className="header-container p-0 m-0">
                <div className='banner-container' >
                </div>
                <div className='banner-details'>
                    <Navbar></Navbar>
                    <div className="header-bio">
                        <div className={`header-bio-image text-center ${toggle ? 'bounce-in-top' : ''}`}>
                            <img className=" rounded-circle" src={my} alt="" width="130px" />
                        </div>
                        <div className="header-bio-intro d-flex justify-content-center flex-column align-items-center mt-3">
                            <div className="">
                                <h1 className={toggle ? "typewriter" : ''}>Md Rasel Haulader</h1>
                            </div>
                            <h5 style={{ color: 'rgba(170, 107, 253, 0.816)' }} className="mt-2">Web  developer</h5>
                            <p className="text-center">
                                I am passionate about all things web <br /> development.
                                I care about writing clean code and<br />
                                I genuinely love to learn.
                            </p>
                        </div>
                        <div className="header-bio-icon mt-4">
                            <a href="https://web.facebook.com/mdraselhaulader01"><i className="fa fah fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/md-rasel-haulader-109280218/"><i className="fa fah fa-linkedin"></i></a>
                            <a href="https://github.com/RaselHaulader"><i className="fa fah fa-github"></i></a>
                            <a href="#whatsApp"><i className="fa fah fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div className="animation-area">
                    <ul className="box-area m-0 p-0">
                        <li>Html</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React Js</li>
                        <li>Node Js</li>
                        <li>MongoDB</li>
                        <li>Express Js</li>
                        <li>Firebase</li>
                        <li>Heroku</li>
                        <li>Redux</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;