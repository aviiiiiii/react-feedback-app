import React from 'react'
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import FeedbackContext from '../contexts/FeedbackContext' 

function FeedbackList() {
    const {feedback}=useContext(FeedbackContext);
    
    if(!feedback || feedback.length===0)
        return <p>No Feedbacks yet</p>
  return (
    <div >
    {feedback.map((fb,index)=>(
        <FeedbackItem key={index} fb={fb}/>
    ))}</div>
  )
}


export default FeedbackList
