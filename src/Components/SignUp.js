import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', email, password);
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1 style={{fontFamily: "'Kanit', sans-serif" }}>Sign Up</h1>
      <p  style={{fontFamily: "'Kanit', sans-serif" }} className='text-center'>
        Already have an account? Log in here <Link to='/Login'>Login</Link>.
      </p>
      <div className="container border p-4 rounded">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%' }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%' }}
            />
          </Form.Group>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <ul id="ul1" className='list-unstyled' style={{ fontSize: '14px'}}>
                  <li>One lowercase character</li>
                  <li>One uppercase character</li>
                  <li>One number</li>
                </ul>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                  <ul id="ul1" className='list-unstyled' style={{ fontSize: '14px'}}  >
                    <li>One special character</li>
                    <li>8 characters minimum</li>
                  </ul>
              </div>
            </div>
          </div>
          <Button  className='my-2 w-100' style={{backgroundColor:'green'}} size="lg">
            Sign Up for free
          </Button>
          <Button className='my-2 w-100' variant="primary" size="lg">
            Continue with Facebook
          </Button>
          <Button className='my-2 w-100' size="lg" style={{ backgroundColor: 'white', color: 'black' }}>
            Continue with Google
          </Button>
          <Button className='my-2 w-100' size="lg" style={{ backgroundColor: 'white', color: 'black' }}>
            Continue with GitHub
          </Button>
          <Button className='my-2 w-100' size="lg" style={{ backgroundColor: 'white', color: 'black' }}>
            Continue with Feide
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
