import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

const LoginPage = (props) => {
  return (
    <div>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default LoginPage;