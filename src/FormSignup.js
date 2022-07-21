import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => { 
    const {handleChange, values, handleSubmit, errors} = useForm(
        submitForm, 
        validate
        );

  return (
    <div className="form-content-right">
        <form className='form' onSubmit={handleSubmit}>
            <h1>Commencez avec nous dès aujourd'hui ! Créez votre
                compte en remplissant les informations
                dessous.
            </h1>
            <div className='form-inputs'>
                <input 
                    id='username'
                    type="text" 
                    name = "name" 
                    className="form-input"
                    placeholder='Name'
                    value={values.name}
                    onChange={handleChange}
                    />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div className='form-inputs'>
                <input 
                    id='username'
                    type="text" 
                    name = "lastname" 
                    className="form-input"
                    placeholder='Last Name'
                    value={values.lastname}
                    onChange={handleChange}
                    />
                {errors.lastname && <p>{errors.lastname}</p>}
            </div>
            <div className='form-inputs'>
                <input 
                    id='email'
                    type="email" 
                    name = "email" 
                    className="form-input"
                    placeholder='Email Address'
                    value={values.email}
                    onChange={handleChange}
                    />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
                <input 
                    id='password'
                    type="password" 
                    name = "password" 
                    className="form-input"
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className='form-inputs'>
                <input 
                    id='password2'
                    type="password" 
                    name = "password2" 
                    className="form-input"
                    placeholder='Re-enter password'
                    value={values.password2}
                    onChange={handleChange}
                    />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn'
            type='submit'>
                Sign up
            </button>
        </form>
    </div>
  )
}

export default FormSignup