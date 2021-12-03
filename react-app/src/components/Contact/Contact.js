import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { sendMessage } from '../../store/contact';
import './Contact.css'

const SubmitMessage = ({setSuccess}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([]);
const history = useHistory();

const handleSubmit = async (e) => {
    e.preventDefault();
        const createdMessage = {
          name,
          email,
          subject,
          message
        };
        const data = await dispatch(sendMessage(createdMessage));
        if (data) {
          setErrors(data);
        }
        if(data.success) {
            setSuccess(true)
        }


}





    return (
    <div className='contact-container'>
    <form className='contact-form' onSubmit={handleSubmit}>
    <h3 className='contact-header'>Contact Me</h3>

      <div className='row'>
        <div>
        {<>
        {errors.errors && 
        <>
        {errors.errors.map((error, ind) => {
         const where = error.slice(0, error.indexOf(':'))
          const onlyError = error.slice(error.indexOf(':') + 1)
          if(where.includes('name')) {

            return (
              <div className='error' key={ind}>{onlyError}</div>
            )
          }
          
          
        })}
        </>}
        </>}
        
        </div>
        <label className='label' >Name:</label>
        <input
          className='input'
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </div>
      <div className='row'>
        <div>
        {<>
        {errors.errors && 
        <>
        {errors.errors.map((error, ind) => {
         const where = error.slice(0, error.indexOf(':'))
          const onlyError = error.slice(error.indexOf(':') + 1)
          if(where.includes('email')) {

            return (
              <div className='error' key={ind}>{onlyError}</div>
            )
          }
          
          
        })}
        </>}
        </>}
        </div>
        <label className='label' htmlFor='email'>Email:</label>
        <input
          className='input'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
      </div>
      <div className='row'>
        <div>
        {<>
        {errors.errors && 
        <>
        {errors.errors.map((error, ind) => {
         const where = error.slice(0, error.indexOf(':'))
          const onlyError = error.slice(error.indexOf(':') + 1)
          if(where.includes('subject')) {

            return (
              <div className='error' key={ind}>{onlyError}</div>
            )
          }
          
          
        })}
        </>}
        </>}
        </div>
        <label className='label' >Subject:</label>
        <input
          className='input'
          name='subject'
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={(e) => {setSubject(e.target.value)}}
        />
      </div>
      <div className='row'>
        <div>
        {<>
        {errors.errors && 
        <>
        {errors.errors.map((error, ind) => {
         const where = error.slice(0, error.indexOf(':'))
          const onlyError = error.slice(error.indexOf(':') + 1)
          if(where.includes('message')) {

            return (
              <div className='error' key={ind}>{onlyError}</div>
            )
          }
          
          
        })}
        </>}
        </>}
        </div>
        <label className='label' >Message:</label>
        <textarea
          className='big-input'
          name='message'
          type='text'
          placeholder='Message'
          value={message}
          onChange={(e) => {setMessage(e.target.value)}}
        />
      </div>
      
      <div className='contact-submit-container'>
        <button className='contact-button' type='submit'>Submit</button>
      </div>
    </form>
    
  </div>  
    )
}

export default SubmitMessage