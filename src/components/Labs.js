import React from 'react'
import { useNavigate } from 'react-router-dom'




function Labs() {

    const navigate = useNavigate();

    function clickHandler(){
        navigate("/about");
    }


  return (
    <div>
    <div>Labs</div>
    <button onClick={clickHandler} >Move To about page</button>
    </div>

  )
}

export default Labs