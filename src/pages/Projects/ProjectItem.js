import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectItems.css'

const ProjectItem = ({ img, name, live, clientCode, serverCode, id, info }) => {
    return (
        <div className=" rounded-3 project-col ">

            <div data-aos="zoom-in-up" className="project-demo  rounded-3 position-relative p-3">
                <div className="project-pic ">
                    <img className='rounded-3' width="100%" src={img} alt="" />
                </div>
                <div className="project-details">
                    <h5 className="mt-3">{name}</h5>
                </div>
                <div className="projectItemOverlay">

                </div>
                <div className="project-btn-container">
                    <h4>{name}</h4>
                    <p>{info}</p>
                    <div>
                        <Link to={`/projectDetails/${id}`}> <button>Details</button> </Link>
                        <a href={live} target="_blank" rel='noreferrer' > <button>Live </button></a>
                        <a href={clientCode} target="_blank" rel='noreferrer' ><button>Client side code</button></a>
                        {serverCode && <a href={clientCode} target="_blank" rel='noreferrer'><button>Server side Code</button></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;