import { useState } from "react"
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card"
import { useContext, useEffect } from "react";
import FeedbackContext from "../contexts/FeedbackContext";

function FeedbackForm() {

    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext);
    const [text,setText]=useState("");
    const [btnDisabled,setbtnDisabled]=useState(true);
    const [rating,setRating]=useState(10);
    const [msg,setMsg]=useState(""); 

    useEffect(()=>{
        if(feedbackEdit.edit==true){
            setText(feedbackEdit.fb.text);
            setRating(feedbackEdit.fb.rating);
            setbtnDisabled(false);
        }
    },[feedbackEdit])

    const handleTextChange=(e)=>{
        if(text===''){
            setbtnDisabled(true);
            setMsg(null);
        }
        else if(text.trim().length<10){
            setbtnDisabled(true);
            setMsg("Enter atleast 10 chars");
        }else{
            setbtnDisabled(false);
            setMsg(null);    
        }
        setText(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newFeedback={
            text:text,
            rating:rating
        };
        if(text.trim().length<10){
            setbtnDisabled(true);
            setMsg("Enter atleast 10 chars");
        }else{
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.fb.id,newFeedback);
                feedbackEdit.edit=false;
                setbtnDisabled(true);
                setMsg(null);
            }else{
                addFeedback(newFeedback);
            }
            setText("");
        }
        
    }
    

  return (
    <Card>
    <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
            <input type='text' onChange={handleTextChange} value={text}></input>
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {msg && <div className="message">{msg}</div>}
        </form>
    </Card>

  )
}

export default FeedbackForm