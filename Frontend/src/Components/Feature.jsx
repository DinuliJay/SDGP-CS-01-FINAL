import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="Quiz" desc="Fill out the quiz to let us know about your preferred job roles"/>
            <Featurebox image={fimage2} title="Interview" desc="Answer a set of questions related to your choice infront of the camera" />
            <Featurebox image={fimage4} title="Analysis" desc="Analyzing your body langugae and your answers during the interview"/>
            <Featurebox image={fimage3} title="Feedback" desc="Receive feedback on your answers and body language"/>
            
            
        </div>

    </div>
  );
}

export default Feature;