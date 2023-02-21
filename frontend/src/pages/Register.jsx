import React, { useState, useContext } from 'react';
import '../styles/login.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import {Popup} from '../components/Popup/Popup.js';


const Register = () => {


  const [credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined
  });
  const [open, setOpen] = useState(false);
  
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {

    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };


  const handleClick = async (e) =>{
    e.preventDefault();
    //console.log(1);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const result = await res.json();

      if (!res.ok) {
        // alert(result.message);
        setOpen(true);
      }

      dispatch({ type: 'REGISTER_SUCCESS' });
      navigate('/login');
    } catch(err) {
      
    }

  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">

              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Registracija</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Korisničko ime' required id="username" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Šifra' required id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Kreiraj nalog</Button>
                  {open ? <Popup text="Neispravni podaci!" closePopup={() => setOpen(false)} /> : null}
                </Form>
                <p>Već imate nalog? <Link to='/login'>Prijavi se!</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register