import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {

    const navitage = useNavigate();

    function clickHandler(){
        navitage("/support");
    }

    

    return (
        <div>
            <div>About</div>
            <button onClick={clickHandler}>GO to Support</button>
        </div>

    )
}

export default About