import React from 'react'
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import "./header.css";

const nav__links = [
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
]

const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">

          {/* --------------------------------- logo ------------------------------- */}
          <div className="logo">
            <img src={logo}  />
          </div>
          {/* --------------------------------- logo ------------------------------- */}

          {/* --------------------------------- navigacioni meni ------------------------------- */}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path} className={ navClass => navClass.isActive ? 'active__link' : ""}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* --------------------------------- navigacioni meni ------------------------------- */}

          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">
              <Button className='btn secondary__btn'>
                <Link to='/login'>Prijavi se</Link>
              </Button>

              <Button className='btn primary__btn'>
                <Link to='/register'>Registruj se</Link>
              </Button>
            </div>

            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
    </header>
}

export default Header