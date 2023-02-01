import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Pre nego što kreneš'} />
                <img src={worldImg} />
              </div>
              <h1>Putovanja su način da stvorite nezaboravna <span className="highlight">sećanja!</span></h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium, nobis obcaecati repudiandae neque aliquam modi necessitatibus.
                Natus ipsa repudiandae assumenda, tempore consequatur modi dolores impedit! Rem sapiente at blanditiis.
              </p>
            </div>
          </Col>


          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} />
            </div>
          </Col>
          
          <Col lg='2'>
            <div className="hero__img-box mt-4" >
              <video src={heroVideo}  controls/>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>Naša ponuda</h5>
            <h2 className='services__title'>Naše najbolje usluge</h2>
          </Col>
        </Row>
      </Container>
    </section>
    </>
}

export default Home