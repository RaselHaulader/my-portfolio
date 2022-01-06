import React from 'react';

const Skills = () => {
    return (
        <div>
            <div id="my-skill" className="skill-container py-5 p-4 container-fluid">
                <div className="hr-cap m-auto text-center text-white">
                    <div className="about-me-title text-center  pt-4"
                        style={{color:"rgba(242, 232, 232, 0.946)", textTransform:"uppercase"}}>
                        <h3>My <span style={{color:"rgba(139, 179, 238, 0.979)"}}>Skills</span></h3>
                        <div className="hr-container">
                            <hr className="hr-a" /><i className="fab fa fa-lightbulb-o"></i>
                            <hr className="hr-a" />
                        </div>
                    </div>
                    <p className="caption">Here all of my skills</p>
                </div> <br />
                <div className="row skl py-5 my-5">
                    <div className=" skill-bar-container col-sm-12 col-lg-4 ">
                        <ul>
                            <li data-aos="flip-right">
                                <div className="skill-icon-html"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">HTML5</h6>
                                <h6 className="skill-title1">80%</h6>
                                <div className="skill-bar skill-bar-html">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon-css"><i className="fa fa-css3" aria-hidden="true"></i></div>
                                <h6 className="skill-title">CSS3</h6>
                                <h6 className="skill-title1">75%</h6>
                                <div className="skill-bar skill-bar-css">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon-bootstrap"><img src="" alt="" /></div>
                                <h6 className="skill-title">Bootstrap</h6>
                                <h6 className="skill-title1">70%</h6>
                                <div className="skill-bar skill-bar-bootstrap">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon-javascript"><img src="" alt="" /></div>
                                <h6 className="skill-title">Javascript</h6>
                                <h6 className="skill-title1">70%</h6>
                                <div className="skill-bar skill-bar-javascript">
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="skill-bar-container  col-sm-12 col-lg-4">
                        <ul>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">React js</h6>
                                <h6 className="skill-title1">75%</h6>
                                <div className="skill-bar skill-bar-react">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Node js</h6>
                                <h6 className="skill-title1">65%</h6>
                                <div className="skill-bar skill-bar-php">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Express js</h6>
                                <h6 className="skill-title1">60%</h6>
                                <div className="skill-bar skill-bar-wp">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">MongoDb</h6>
                                <h6 className="skill-title1">60%</h6>
                                <div className="skill-bar skill-bar-python">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-bar-container  col-sm-12 col-lg-4">
                        <ul>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Material Ui</h6>
                                <h6 className="skill-title1">65%</h6>
                                <div className="skill-bar skill-bar-react">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Tailwind css</h6>
                                <h6 className="skill-title1">75%</h6>
                                <div className="skill-bar skill-bar-php">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Heroku</h6>
                                <h6 className="skill-title1">80%</h6>
                                <div className="skill-bar skill-bar-wp">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Stripe</h6>
                                <h6 className="skill-title1">80%</h6>
                                <div className="skill-bar skill-bar-python">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;