import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams()
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState([])
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/RaselHaulader/json/main/projectDetails.json')
      .then(res => res.json())
      .then(data => {
        const filter = data.filter(item => item.id == id)
        setPhotos(filter[0].photos)
        setDetails(filter[0])
        console.log(data)
      })
  }, [])

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div style={{ minHeight: '100vh', }} className="detailsPageContainer text-light">
      <Navbar></Navbar>
      <br />
      <br />
      <div className='container row m-0 p-0 mx-auto'>
        <div className='col-12 col-md-7 d-grid' style={{placeItems:'center'}}>
          <div>
            <h2>{details.name}</h2>
            <p>{details.details}</p>
            <h5>Functionality</h5>
            <ul className="m-0 ps-5">
              {details?.functionality?.map(item => <li>{item}</li>)}
            </ul>
            <br />
            <p><b> Used Technology: </b> {details.technology}</p>
          </div>
        </div>
        <div className='col-12 col-md-5'>
       
          <br />
          <div style={{ height: '600px', overflowX: 'hidden', overflowY: 'scroll' }}>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

