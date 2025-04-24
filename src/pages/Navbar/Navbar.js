import React from 'react';
import { Link } from 'react-router-dom';
import myResume from '../../file/resume.pdf';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar sticky-top navbar-expand-sm  my-style  navbar-dark">

            <h5 className="text-light fw-bold navbar-brand" style={{fontFamily:"'Play', sans-serif"}}>RASEL'S PORTFOLIO</h5>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div style={{ position: 'absolute', right: '20px', top: "65px" }} className="collapse navbar-collapse "
                    id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto ">
                        <Link to='/home' className="nav-item text-decoration-none ml-auto "><a className="nav-link " href="#">Home</a></Link>
                        <HashLink to='/home/#about' className="nav-item text-decoration-none ml-auto"><a className="nav-link" href="">About</a></HashLink>
                        {/* <li className="nav-item ml-auto"><a className="nav-link" href="#service">Service</a></li> */}
                        <HashLink to='/home/#my-skill' className="nav-item text-decoration-none ml-auto"><a className="nav-link " href="">Skills</a></HashLink>
                        <HashLink to='/home/#project-sec' className="nav-item text-decoration-none ml-auto"><a className="nav-link" href="">projects</a></HashLink>
                        <Link to='/blogs' className="nav-item ml-auto text-decoration-none"><a className="nav-link " href="#">Blogs</a></Link>
                        {/* <Link to='/study' className="nav-item ml-auto text-decoration-none"><a className="nav-link " href="#">Study</a></Link> */}

                        <HashLink to='/home/#contact' className="nav-item text-decoration-none ml-auto"><a className="nav-link" href="">Contact</a></HashLink>
                        <li className="nav-item ml-auto"> <a className="btn btn-secondary text-decoration-none text-light" href={myResume} download="Rasel_Resume.pdf">Download Resume</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;