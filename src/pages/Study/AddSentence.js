import React, { useState } from 'react';

const AddSentence = () => {
    const style = {
        maxHeight: '0px'
    }
    const [styles, setStyles] = useState(style)

    const handleFold = () => {
        const style2 = {
            maxHeight: '500px'
        }
        console.log(styles.maxHeight);
        styles.maxHeight == "0px" ? setStyles(style2) : setStyles(style);
    }
    return (
        <div className='border p-2 my-3 rounded-3 '>
            <div className='d-flex align-items-center justify-content-between'>
                <h5 className='text-center text-uppercase p-0 m-0'>Add New Sentence</h5> <button onClick={handleFold} className='btn fs-4 p-0  text-white '>{styles.maxHeight==='0px' ? '⬇' : '⬆'}</button>
            </div>
            <div style={{overflow:'hidden', transition:'0.5s',...styles}} >
                <hr />
                <div>
                    <textarea className='bg-transparent border border-secondary p-0 w-100 rounded-3 text-white m-1' placeholder='বাংলা বাক্য' type="text" /> <br />
                    <textarea className='bg-transparent border border-secondary p-0 w-100 rounded-3 text-white m-1' placeholder='English sentence' type="text" /> <br />
                    <button className='btn btn-secondary py-2 border m-0 p-0 w-100 m-1 text-white'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddSentence;