import React, {useState} from "react";
import {Link, useParams } from 'react-router-dom'
import img from './icon-star.svg'


const PageOne = ({getValue})=>{    
    const [ inputVal, setInputVal ] = useState('');
    let val = [1,2,3,4,5];
    let submitHandler = (e)=>{
        e.preventDefault();
    }

    let handleChange = (e)=>{
        setInputVal(e.target.value)
    }

    return <div className='container'><div className='form-container'>    
    <div className='star-icon'>
        <img src={img}/>
    </div>
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>
        <div className='form'>
           
            {val.map((item, key)=>{return <> <label for={`ram${item}`}>{item}</label>
                <input type='checkbox' value={item} name={item} id={`ram${item}`} onChange={handleChange}/>
            </>})}
            
        </div>
        <div><Link to={`/thank-you-page/${inputVal}`}><button className='submit'>SUBMIT</button></Link></div>
</div></div>
}

export default PageOne