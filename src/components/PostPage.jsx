import React from 'react'
import {Navigate, useNavigate, Route, Routes} from "react-router-dom"

function PostPage() {
    const navigate=useNavigate();

    const status=202;
    if(status===404){
        return <Navigate to='/notfound' />
    }

    const onCLick=()=>{
        console.log("clicked");
        navigate('/');
    }

    return (
        <>
            <div>Post</div>
            <button onClick={onCLick}>clickMe</button>
            <Routes>
            <Route exact path='/show' element={<h1>Hello</h1>}/>
            </Routes>
        </>
  )
}

export default PostPage