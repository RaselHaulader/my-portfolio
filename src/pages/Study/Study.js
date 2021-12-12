import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sentences from './Sentences';
import './Sentence.css';
import AddSentence from './AddSentence';

const Study = () => {

    return (
        <div className="study-container ">
            <Navbar /><br /> <br />
            <div className="container-lg row mx-auto">
                <div className="col-12 col-md-3 ">
                    <AddSentence></AddSentence>
                </div>
                <div className="col-12 col-md-9">
                   
                    <Sentences></Sentences>
                </div>
            </div>
        </div>
    );
};

export default Study;