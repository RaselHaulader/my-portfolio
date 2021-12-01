import React, { useEffect } from 'react';
import my from '../../images/my.jpg';
import myResume from '../../file/resume.pdf';
import './Banner.css';
import Navbar from '../Navbar/Navbar';

const Banner = () => {
    useEffect(() => {
        window.onscroll = () => {
            console.log(window.pageYOffset * .09)
            console.log(window.innerWidth)
            console.log(window.innerHeight)
        }
    }, []);
    return (
        <div>
            <div className="header-container">

            </div>
            <div style={{position:'absolute', top:'0', width:'100%'}}>
                <Navbar></Navbar>
                <div className="header-bio" style={{ zIndex: '10', position: 'relative' }}>

                    <div className="header-bio-image text-center bounce-in-top ">
                        <img className=" rounded-circle" src={my} alt="" width="130px" />
                    </div>

                    <div className="header-bio-intro d-flex justify-content-center flex-column align-items-center mt-3">
                        <div className="">
                            <h1 className="typewriter ">Md Rasel Haulader</h1>
                        </div>
                        <h5 style={{ color: 'rgba(170, 107, 253, 0.816)' }} className="mt-2">Web designer & developer</h5>
                        <p className="text-center">"
                            I am passionate about all things web <br /> development.
                            I care about writing clean code and<br />
                            I genuinely love to learn.
                            "</p>
                    </div>

                    <div className="header-bio-icon mt-4">
                        <i className="fa fah fa-facebook"></i>
                        <i className="fa fah fa-skype"></i>
                        <i className="fa fah fa-twitter"></i>
                        <i className="fa fah fa-whatsapp"></i>
                    </div>
                </div>
                <div className="animation-area">
                    <ul className="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;