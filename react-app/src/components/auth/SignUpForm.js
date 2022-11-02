import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='SignUpFormPage'>
      <div id='SignUpFormImg'>
        <img id='rocketImage' src='https://images.unsplash.com/photo-1636828982375-a4ec8b809e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tldCUyMGxhdW5jaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
      </div>
      <div className='formContainer'>
        <form id='SignUpForm' onSubmit={onSignUp}>
          <p id='signUpHeader'>Sign Up Here</p>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div id='namesContainer'>
            <div>
              <input
                className='signUpInputNames'
                type='text'
                name='firstname'
                onChange={updateFirstname}
                value={firstname}
                placeholder='First name'
              ></input>
            </div>
            <div>
              <input
                className='signUpInputNames'
                type='text'
                name='lastname'
                onChange={updateLastname}
                value={lastname}
                placeholder='Last name'
              ></input>
            </div>
          </div>
          <div>
            <input
              className='signUpFormInputs'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder='Username'
            ></input>
          </div>
          <div>
            <input
              className='signUpFormInputs'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder='Email address'
            ></input>
          </div>
          <div>
            <input
              className='signUpFormInputs'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder='Password'
            ></input>
          </div>
          <div>
            <input
              className='signUpFormInputs'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='Confirm password'
            ></input>
          </div>
          <button id='signUpButton' type='submit'>Sign Up</button>
          <p id='loginText'>Already have an account? <span id='loginRedirect' onClick={() => history.push('/login')}>Log in</span></p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
