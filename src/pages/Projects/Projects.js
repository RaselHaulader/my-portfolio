import React from 'react';
import project0 from '../../images/Propertybazar (1).png';
import project1 from '../../images/Screenshot (71).png';
import project2 from '../../images/Screenshot (72).png';
import project3 from '../../images/Screenshot (95).png';
import project4 from '../../images/Screenshot (97).png';
import project5 from '../../images/Screenshot (99).png';
import project6 from '../../images/Screenshot (100).png';
import ProjectItem from './ProjectItem';
import Tilt from 'react-parallax-tilt';
const Projects = () => {
    return (
        <div>
            <div id="project-sec" className="project-container py-5 text-white container-fluid">
                <div className="hr-cap m-auto text-center text-white">
                    <div className="about-me-title text-center  pt-4"
                        style={{ color: "rgba(242, 232, 232, 0.946)", textTransform: "uppercase" }}>
                        <h3>My <span style={{ color: "rgba(139, 179, 238, 0.979)" }}>Project</span></h3>
                        <div className="hr-container">
                            <hr className="hr-a" /><i className="fab fa fa-lightbulb-o"></i>
                            <hr className="hr-a" />
                        </div>
                    </div>
                    <p className="caption">Here all of my project</p>
                </div> <br />

                <div className="row project-row pt-2 pb-5">
                    <Tilt className="parallax-effect col-md-4" perspective={500}>
                        <ProjectItem
                            id='0'
                            img={project0}
                            name={'Property Bazar'}
                            info='Property Buying and selling website'
                            clientCode='https://github.com/RaselHaulader/jess-property-client-side'
                            serverCode='https://github.com/RaselHaulader/jess-property-server'
                            live='https://property-bazar-8a4ae.web.app/'
                        />
                    </Tilt>
                    <Tilt className="parallax-effect col-md-4" perspective={500}>
                        <ProjectItem
                            id='2'
                            img={project3}
                            name={'Helmet Hut'}
                            info='Helmet selling website'
                            clientCode='https://github.com/RaselHaulader/Helmet-hut-client-side'
                            serverCode='https://github.com/RaselHaulader/Helmet-hut-sever-side'
                            live='https://helmet-hut.web.app/'
                        />
                    </Tilt>
                    <Tilt className="parallax-effect col-md-4" perspective={500}>
                        <ProjectItem
                            id='3'
                            info="Food delivery-related website"
                            img={project2}
                            name='Food express'
                            clientCode="https://github.com/RaselHaulader/food-express-client-side"
                            serverCode='https://github.com/RaselHaulader/food-express-server-side'
                            live="https://foodexpress-76cd4.web.app/"
                        />
                    </Tilt>
                    <Tilt className="parallax-effect col-md-4" perspective={500}>
                        <ProjectItem
                            id='1'
                            info='Hospital Related Website.'
                            img={project1}
                            name='HealthCare Hospital'
                            clientCode="https://github.com/RaselHaulader/Hospital"
                            live="https://health-care-hospital-dd05d.web.app/"
                        />
                    </Tilt>
                    {/* <Tilt className="parallax-effect col-md-4" perspective={500}>
                        <ProjectItem
                            id='4'
                            img={project4}
                            name={'Explore Bangladesh'}
                            info='Travel info related website'
                            clientCode='https://github.com/RaselHaulader/Explore-Bangladesh'
                            live='https://explore-beautiful-bangladesh.netlify.app/'
                        />
                    </Tilt> */}
                    <Tilt className="parallax-effect col-md-4" perspective={500}>
                        <ProjectItem
                            id='6'
                            img={project5}
                            name={'Daraz landing page clone'}
                            info='Landing page clone from Daraz bd'
                            clientCode='https://github.com/RaselHaulader/daraz'
                            live='https://daraz-clone-by-rasel.netlify.app/'
                        />
                    </Tilt>
                    <Tilt className="parallax-effect col-md-4" perspective={500}>
                        <ProjectItem
                            id='5'
                            img={project6}
                            name={'Swimming Academy'}
                            info='Training center related website'
                            clientCode='https://github.com/RaselHaulader/Swim-Academy'
                            live='https://swim-academy.netlify.app/'
                        />
                    </Tilt>
                </div>

            </div>
        </div >
    );
};

export default Projects;