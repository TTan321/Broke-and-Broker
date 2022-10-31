import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='loginFormPage'>
      <div id='loginFormImage'>
        <img id='moonImage' src='https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80' />
      </div>
      <div className='formContainer'>
        <form id='loginForm' onSubmit={onLogin} >
          <p id='loginHeader'>Log In Here</p>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label className='loginLabels' htmlFor='email'><p className='labelText'>Email</p></label>
            <input
              className='loginInputs'
              name='email'
              type='text'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label className='loginLabels' htmlFor='password'><p className='labelText'>Password</p></label>
            <input
              className='loginInputs'
              name='password'
              type='password'
              value={password}
              onChange={updatePassword}
            />
            <button id='loginButton' type='submit'>Log In</button>
            <p id='signUpText'>Not on Moon Rocket? <span id='signUpRedirect' onClick={() => history.push('/sign-up')}>Create an account</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
