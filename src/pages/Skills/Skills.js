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
                                <h6 className="skill-title1">95%</h6>
                                <div data-aos className="skill-bar skill-bar-html">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon-css"><i className="fa fa-css3" aria-hidden="true"></i></div>
                                <h6 className="skill-title">CSS3</h6>
                                <h6 className="skill-title1">95%</h6>
                                <div data-aos className="skill-bar skill-bar-css">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon-bootstrap"><svg width="28px" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>
                                <h6 className="skill-title">Bootstrap</h6>
                                <h6 className="skill-title1">95%</h6>
                                <div data-aos className="skill-bar skill-bar-bootstrap">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon-javascript"> <svg width="24px" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                                <h6 className="skill-title">Javascript</h6>
                                <h6 className="skill-title1">85%</h6>
                                <div data-aos className="skill-bar skill-bar-javascript">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon-javascript"> <svg width="24px" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg></div>
                                <h6 className="skill-title">Liquid</h6>
                                <h6 className="skill-title1">95%</h6>
                                <div data-aos className="skill-bar skill-bar-javascript">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-bar-container  col-sm-12 col-lg-4">
                        <ul>
                            <li data-aos="flip-right">
                                <div className="skill-icon">                                    
                                <svg width="24px" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
                                </div>
                                <h6 className="skill-title">React js</h6>
                                <h6 className="skill-title1">85%</h6>
                                <div data-aos className="skill-bar skill-bar-react">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon">
                                <svg width="24px" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>    
                                </div>
                                <h6 className="skill-title">Node js</h6>
                                <h6 className="skill-title1">85%</h6>
                                <div data-aos className="skill-bar skill-bar-php">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><small>express</small></div>
                                <h6 className="skill-title">Express js</h6>
                                <h6 className="skill-title1">85%</h6>
                                <div data-aos className="skill-bar skill-bar-wp">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon">
                               <svg width="25px" height="45px" xmlns="http://www.w3.org/2000/svg"><path d="M16.147 5.154l1.09 2.05a6.15 6.15 0 0 0 .824 1.024c.913.913 1.782 1.87 2.56 2.895 1.848 2.427 3.095 5.122 3.986 8.04.534 1.782.824 3.608.846 5.456.09 5.523-1.804 10.266-5.634 14.208a16.3 16.3 0 0 1-2.004 1.715c-.38 0-.557-.3-.713-.557-.3-.5-.468-1.047-.557-1.603-.134-.668-.223-1.336-.178-2.027v-.312c-.022-.067-.356-30.732-.223-30.888z" fill="#fff"/><path d="M16.147 5.088c-.045-.09-.09-.022-.134.022.022.445-.134.846-.38 1.225-.267.38-.624.668-.98.98-1.982 1.715-3.54 3.786-4.788 6.102-1.648 3.118-2.516 6.458-2.76 9.977-.11 1.27.4 5.746.802 7.037 1.09 3.43 3.05 6.302 5.6 8.796.624.6 1.292 1.158 1.982 1.692.2 0 .223-.178.267-.312a6.11 6.11 0 0 0 .2-.869c.2-1.113.312-2.227.445-3.34l-.245-31.31z" fill="#fff"/><path d="M17.24 41.9c.045-.512.3-.935.557-1.358-.267-.11-.468-.334-.624-.58-.134-.223-.245-.5-.334-.735-.312-.935-.38-1.915-.468-2.873v-.58c-.11.09-.134.846-.134.958-.067 1.024-.2 2.027-.4 3.006-.067.4-.11.802-.356 1.158 0 .045 0 .09.022.156.4 1.18.512 2.383.58 3.608v.445c0 .534-.022.423.423.6.178.067.38.09.557.223.134 0 .156-.11.156-.2l-.067-.735v-2.05c-.022-.356.045-.713.09-1.047z" fill="#fff"/></svg>
                                </div>
                                <h6 className="skill-title">MongoDb</h6>
                                <h6 className="skill-title1">80%</h6>
                                <div data-aos className="skill-bar skill-bar-python">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon">
                               <svg width="25px" height="45px" xmlns="http://www.w3.org/2000/svg"><path d="M16.147 5.154l1.09 2.05a6.15 6.15 0 0 0 .824 1.024c.913.913 1.782 1.87 2.56 2.895 1.848 2.427 3.095 5.122 3.986 8.04.534 1.782.824 3.608.846 5.456.09 5.523-1.804 10.266-5.634 14.208a16.3 16.3 0 0 1-2.004 1.715c-.38 0-.557-.3-.713-.557-.3-.5-.468-1.047-.557-1.603-.134-.668-.223-1.336-.178-2.027v-.312c-.022-.067-.356-30.732-.223-30.888z" fill="#fff"/><path d="M16.147 5.088c-.045-.09-.09-.022-.134.022.022.445-.134.846-.38 1.225-.267.38-.624.668-.98.98-1.982 1.715-3.54 3.786-4.788 6.102-1.648 3.118-2.516 6.458-2.76 9.977-.11 1.27.4 5.746.802 7.037 1.09 3.43 3.05 6.302 5.6 8.796.624.6 1.292 1.158 1.982 1.692.2 0 .223-.178.267-.312a6.11 6.11 0 0 0 .2-.869c.2-1.113.312-2.227.445-3.34l-.245-31.31z" fill="#fff"/><path d="M17.24 41.9c.045-.512.3-.935.557-1.358-.267-.11-.468-.334-.624-.58-.134-.223-.245-.5-.334-.735-.312-.935-.38-1.915-.468-2.873v-.58c-.11.09-.134.846-.134.958-.067 1.024-.2 2.027-.4 3.006-.067.4-.11.802-.356 1.158 0 .045 0 .09.022.156.4 1.18.512 2.383.58 3.608v.445c0 .534-.022.423.423.6.178.067.38.09.557.223.134 0 .156-.11.156-.2l-.067-.735v-2.05c-.022-.356.045-.713.09-1.047z" fill="#fff"/></svg>
                                </div>
                                <h6 className="skill-title">Graphql</h6>
                                <h6 className="skill-title1">80%</h6>
                                <div data-aos className="skill-bar skill-bar-python">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-bar-container  col-sm-12 col-lg-4">
                        <ul>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Material Ui</h6>
                                <h6 className="skill-title1">85%</h6>
                                <div data-aos className="skill-bar skill-bar-react">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Tailwind css</h6>
                                <h6 className="skill-title1">95%</h6>
                                <div data-aos className="skill-bar skill-bar-php">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Heroku</h6>
                                <h6 className="skill-title1">80%</h6>
                                <div data-aos className="skill-bar skill-bar-wp">
                                </div>
                            </li>
                            <li data-aos="flip-right">
                                <div className="skill-icon"><i className="fa fa-html5" aria-hidden="true"></i></div>
                                <h6 className="skill-title">Stripe</h6>
                                <h6 className="skill-title1">80%</h6>
                                <div data-aos className="skill-bar skill-bar-python">
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