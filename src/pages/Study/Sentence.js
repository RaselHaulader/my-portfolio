import React, { useState } from 'react';
import './Sentence.css';

const Sentence = () => {
    const [open, setOpen] = useState(false)
    const styles = {
        maxHeight: '0',
        transition: '0.5'
    }
    const styles2 = {
        maxHeight: '500px',
        transition: '0.5s'
    }
    const [style, setStyle] = useState(styles)
    const handleToggle = () => {
        if (!open) {
            setStyle(styles2)
            setOpen(true)
        } else {
            setStyle(styles)
            setOpen(false)
        }
    }
    return (
        <div className='sentence-container rounded-3 p-3 my-2'>
            <div className="d-flex justify-content-between align-items-center">
                <p className="fs-6"> বাংলা বাক্য এখানে থাকবে বাংলা বাক্য এখানে থাকবে বাংলা বাক্য এখানে থাকবে বাংলা বাক্য এখানে থাকবে    </p>
                <span onClick={handleToggle} > {!open ? <i className="fa eye-btn fa-eye" /> : <i class="fa eye-btn fa-eye-slash"></i>} </span>
            </div>
            <div style={style} className="english-sentence">
                <hr />
                <p className="fs-5">English translate form Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error explicabo fugit laborum eius soluta, exercitationem voluptatum at maiores corrupti quaerat. Beatae dicta atque eum neque molestias fuga sint perferendis.</p>
            </div>
        </div>
    );
};

export default Sentence;