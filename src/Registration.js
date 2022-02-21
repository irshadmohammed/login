import React, { useState } from 'react';
import './Registration.css';
import Toggler from './Toggler';
import { Input } from 'antd';
import SocialButtons from './SocialButtons';
import axios from 'axios';
import { connect } from 'react-redux';
import { registrationFlag, updateName } from './Store/actions';
import { emailRegex } from './utils';

function Registration(props) {

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const nameHandler = (e) => {
    setFullName(e.target.value);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const fetchData = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      alert('Fill fields to continue')
    } else if (password.length < 8) {
      alert('Password minimum length should be 8')
    } else if(emailRegex(email) === false) {
      alert("Enter valid email address");
    }
    else {
      axios.post('http://restapi.adequateshop.com/api/authaccount/registration', {
        "name": fullName,
        "email": email,
        "password": password
      })
        .then(function (response) {
          props.setName(fullName)
          props.registrationFlag(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div className='registration'>
      <Toggler />
      <h1>Sign in to Travelguru</h1>
      <p>Don't have an account?{" "}
        <a href=''>Sign Up</a>
      </p>
      <hr className='mb-70' />
      <form className="registration__form">
        <Input
          className='registration__input mb-60'
          placeholder='Full name'
          value={fullName}
          onChange={(e) => nameHandler(e)}
        />

        <Input
          className='registration__input mb-60'
          placeholder='Email'
          value={email}
          onChange={(e) => emailHandler(e)}
        />
        <Input.Password
          placeholder="Password"
          className='registration__passwordfield mb-60'
          onChange={(e) => passwordHandler(e)}
          value={password}
        />
        <button className='registration__button' onClick={(e) => fetchData(e)}>Continue</button>
      </form>
      <hr />
      <SocialButtons />
    </div>
  )
}

const mapStateToProps = (state) => ({
  resultFlag: state.currentValue,
  status: state.error
})

const mapDispatchToProps = dispatch => {
  return {
    registrationFlag: (data) => dispatch(registrationFlag(data)),
    setName: (data) => dispatch(updateName(data))
  }
}

// export default Registration

export default connect(mapStateToProps, mapDispatchToProps)(Registration);