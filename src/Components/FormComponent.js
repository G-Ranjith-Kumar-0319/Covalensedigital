import React, {useState} from 'react'
import './FormStyle.css'
import PageOne from './PageOne';
import PageTwo from './PageTwo';



const FormComponent = ()=>{
    const [formData, setFormData] = useState(true);
    let getValue = (e)=>{
        setFormData()
    }
  return <>{
    formData === true ? <PageOne getValue={getValue}/> :<PageTwo/>
  }  
  </>
}

export default FormComponent