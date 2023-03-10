import React, { useState, useContext } from 'react'
import '../styles/login.css'

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import {Popup} from '../components/Popup/Popup.js';


const Login = () => {


  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined
  });
  const [open, setOpen] = useState(false);


  
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {

    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };


  const handleClick = async e=>{
    e.preventDefault();

    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });

      const result = await res.json();
      
      if (!res.ok) {
        // alert("Neispravni podaci za prijavu.");
        setOpen(true);
      } else {
        console.log(result.data);

        dispatch({ type: 'LOGIN_SUCCESS', payload:result.data });
        console.log(result.data)
        navigate('/');
      }

    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE',payload:err.message });
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">

              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Prijava</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Prijavi se</Button>
                  {open ? <Popup text="Neispravni podaci!" closePopup={() => setOpen(false)} /> : null}
                </Form>
                <p>Nemate nalog? <Link to='/register'>Registrujte se!</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login