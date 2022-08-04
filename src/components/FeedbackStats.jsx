import {useContext} from 'react'
import FeedbackContext from '../contexts/FeedbackContext';


function FeedbackStats() {
    const {feedback}=useContext(FeedbackContext);

    let total=0;
    feedback.forEach(fb => {
       total +=fb.rating; 
    });
    let avg=(total/feedback.length).toFixed(1);
  return (
    <div className='feedback-stats'>
        <h4>Feedback count : {feedback.length}</h4>
        <h4>Average rating : {isNaN(avg) ? 0 :avg}</h4>
    </div>
  )
}

export default FeedbackStats