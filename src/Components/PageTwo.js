import React from "react";
import './FormStyle.css'
import img from './illustration-thank-you.svg'

const PageTwo = ()=>{    
    let val = [1,2,3,4,5];
    return <div className='form-container pgTwo'>    
    <div className='thank-icon'>
        <img src={img}/>
    </div>
    <div className="highlighted-text">You selected 3 out of 5</div>
    <h1>Thank you!</h1>
    <p style={{'textAlign': 'center'}}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>    
</div>
}

export default PageTwo