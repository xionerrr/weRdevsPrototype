import React from 'react';
import Calendar from "./Calendar/Calendar";


function InfoBlock() {
    return(
        <div className='mainBlock'>
            <div className='textBlock'>
                <div className='texts'>
                <h1 className='text1'>CHOOSE THE DAY<br />FOR THE MEETING</h1>
                <h3 className='text2'>We encourage you to book your<br /> appointment online.</h3>
                <h3 className='text3'>This will save you time.</h3>
                </div>
            </div>
                <Calendar />
        </div>
    );
}

export default InfoBlock;