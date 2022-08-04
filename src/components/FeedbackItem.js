
import {FaTimes,FaEdit} from 'react-icons/fa'
import Card from './shared/Card'

import { useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";
function FeedbackItem({fb}) {

  const {handleDelete,editFeedback}=useContext(FeedbackContext);
  return (
    <Card reverse={true}>
        <div className="num-display">{fb.rating}</div>
        <div className="text-display">{fb.text}</div>
        <button onClick={()=>handleDelete(fb.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <button className='edit' onClick={()=>editFeedback(fb)}><FaEdit color='purple'/></button>

    </Card>
  )
}

export default FeedbackItem