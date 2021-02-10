import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const LogoutPage = (props) => {
  return (
    <div>
      <Link to='/logout'>Logout</Link>
    </div>
  )
}

export default LogoutPage;