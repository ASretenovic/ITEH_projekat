import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


const quick__links = [
  {
    path: '/home',
    display: 'Početna'
  },
  {
    path: '/about',
    display: 'O nama'
  },
  {
    path: '/tours',
    display: 'Ture'
  },
];

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Galerija'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Registruj se'
  },
];

const Footer = () => {

  const year = new Date().getFullYear();

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} />
            <p>Zapratite nas i na društvenim mrežama!</p>

            <div className="social__links d-flex align-items-center gap-4">
              <span><Link to='#'><i className="ri-facebook-circle-line"></i></Link></span>
              <span><Link to='#'><i className="ri-instagram-line"></i></Link></span>
              <span><Link to='#'><i className="ri-twitter-line"></i></Link></span>
              <span><Link to='#'><i className="ri-youtube-line"></i></Link></span>
              
            </div>
          </div>
        </Col>

        <Col lg='3'>
          <h5 className='footer__link-title'>Otkrijte</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='3'>
          <h5 className='footer__link-title'>Pregledajte</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        
        <Col lg='3'>
          <h5 className='footer__link-title'>Kontakt</h5>
          <ListGroup className='footer__quick-links'>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i className="ri-map-pin-line"></i></span>Adresa
              </h6>
              <p className='mb-0'>Rudnička 7, Valjevo</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i className="ri-mail-line"></i></span>Email
              </h6>
              <p className='mb-0'>world.travel@gmail.com</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span> <i className="ri-phone-line"></i></span>Telefon
              </h6>
              <p className='mb-0'>014/730-731</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='12' className='text-center pt-5'>
          <p className="copyright">Copyright {year}</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer