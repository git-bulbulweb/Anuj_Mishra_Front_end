import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', email, password);
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 style={{fontFamily: "'Kanit', sans-serif" }}>Login</h1>
      <p  style={{fontFamily: "'Kanit', sans-serif" }} className='text-center'>
        Don't have an account? Sign up as a <Link to='/signUp'>Student</Link>.
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
          <Button  className='my-2 w-100' style={{backgroundColor:'green'}} size="lg">
            Login
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

export default Login;
