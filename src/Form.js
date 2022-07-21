import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted]= useState(false);

    function submitForm (){
        setIsSubmitted(true); 
    }
    return (
    <>
    <div className='form-container'>
        <Link to="/" className="close-btn" >
            x
        </Link>
        <div className='form-content-left'>
            
        </div>
    {!isSubmitted ? (
        <FormSignup submitForm= {submitForm} />
    ) : (
        <FormSuccess />
    )}
    </div>
    </>
  )
}

export default Form