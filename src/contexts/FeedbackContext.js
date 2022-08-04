import {useState,createContext} from 'react';
import {v4 as uuidv4} from 'uuid';


const FeedbackContext=createContext();

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback]=useState([
        {
            id:1,
            text:"This is feedback 1",
            rating:10
        },
        {
            id:2,
            text:"This is feedback 2",
            rating:9
        },
        {
            id:3,
            text:"This is feedback 3",
            rating:8
        }
    ])

    const [feedbackEdit,setFeedbackEdit]=useState({
        fb:{},
        edit:false
    })

    const editFeedback=(fb)=>{
        setFeedbackEdit({
            fb:fb,
            edit:true
        })
    }


    const handleDelete =(id)=>{
        if(window.confirm("Are you sure to delete this feedback?")){
            setFeedback(()=>{
                return feedback.filter((fb)=>fb.id!==id)
            })
        }
    }

    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4();
        setFeedback([newFeedback,...feedback]);
    }

    const updateFeedback=(id,updateFb)=>{
        setFeedback(feedback.map((item)=>
            (item.id===id ? {...item,...updateFb}:item)
        ))
    }


    return <FeedbackContext.Provider value={{
        addFeedback:addFeedback,
        feedback:feedback,
        editFeedback:editFeedback,
        handleDelete:handleDelete,
        feedbackEdit:feedbackEdit,
        updateFeedback:updateFeedback
    }}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;