import React from 'react';
import my2 from '../../images/my3.jpeg';

const About = () => {

    return (
        <div>
            <div id="about" className="about-me-container py-5 container-fluid">
                <div className="about-me-title text-center  pt-5"
                    style={{color: "rgba(242, 232, 232, 0.946)", textTransform:"uppercase"}}>
                    <h3>About <span style={{color:"rgba(139, 179, 238, 0.979)"}}>me</span></h3>
                    <div className="hr-container">
                        <hr className="hr-a" /><i className="fab fa fa-user-o"></i>
                        <hr className="hr-a" />
                    </div>
                </div>

                <div className="row pb-5">
                    <div  data-aos="zoom-in" className="col-sm-12 col-lg-4 about-me-image pl-4 pt-4 mb-4">
                        <img className="img-fluid rounded" src={my2} alt="pic" />
                    </div>
                    <div className="col-sm-12 pb-5 col-lg-8 about-me-bio mt-3 text-white pl-4 pr-4"
                        style={{color:"rgba(242, 232, 232, 0.946)"}}>
                        <h4 data-aos="fade-left"  className="text-danger">Who am i?</h4>
                        <h4 data-aos="fade-left" className="m-0 ">I'm Rasel</h4>
                        <h4 data-aos="fade-left" className="mt-0 text-success">Full stack Web Developer</h4>
                        <p data-aos="fade-left">I am a full stack developer. I have been building Responsive Web Design and
                            Development which comply with the latest Design trends. I help convert a vision and an idea into
                            meaningful and useful products. Having a sharp eye for product evolution helps me prioritize
                            tasks, iterate fast and deliver faster..</p>
                        <hr  data-aos="fade-left" style={{borderTop:"1px solid rgba(225, 225, 225, 0.275)", width:"100%"}}/>
                        <div data-aos="fade-left"  className="about-me-bio2">
                        <p data-aos="fade-left" ><b>Name: </b> Md Russel Haulader</p>
                        <p data-aos="fade-left" ><b>Age: </b> 23</p>
                        <p data-aos="fade-left" ><b>Email: </b> hauladerrasel2@gmail.com</p>
                        <p data-aos="fade-left" ><b>Phone: </b> +8801985525743</p>
                        <p data-aos="fade-left" ><b>Location: </b> Jashore, Bangladesh.</p>

                        <a data-aos="fade-left"  className="btn btn-success text-decoration-none text-light" href="#contact">Contact Me</a> <a data-aos="fade-left"  className="btn btn-primary text-decoration-none text-light" href='https://drive.google.com/file/d/1JDHFMhJmOv9JzNitgvWE1VdI-VxZmH44/view?usp=sharing' target='_blank' rel='noreferrer' download="Rasel_Resume.pdf">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


