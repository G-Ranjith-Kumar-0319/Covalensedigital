import React, {useEffect} from "react";
import img from './icon-star.svg'


const PageOne = ({getValue})=>{    
    let val = [1,2,3,4,5];
    let submitHandler = (e)=>{
        e.preventDefault();
        getValue(e.target.value)
    }
    return <div className='form-container'>    
    <div className='star-icon'>
        <img src={img}/>
    </div>
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>
    <form onSubmit={submitHandler}>
        <div className='form'>
           
            {val.map((item, key)=>{return <> <label for={item}>{item}</label>
                <input type='checkbox' key={key} value={item} name={item} id={item}/>
            </>})}
            
        </div>
        <div><input type='submit' value="SUBMIT" className='submit'/></div>
    </form>
</div>
}

export default PageOne