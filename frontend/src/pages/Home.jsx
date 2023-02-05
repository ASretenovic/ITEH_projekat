import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

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
            <div className="hero__img-box hero__video-box mt-4" >
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


          <ServiceList />

        </Row>
      </Container>
    </section>

    {/* -------------------------------------------- sekcija za preporucene ture ------------------------------------------------------ */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Istraži'}/>
            <h2 className='featured__tour-title'>Preporučujemo</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* -------------------------------------------- sekcija za preporucene ture ------------------------------------------------------ */}

    
    {/* -------------------------------------------- sekcija iskustvo ------------------------------------------------------------------- */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
            <Subtitle subtitle={'Iskustvo'} />
            <h2>Naše bogato iskustvo <br/> garantuje Vaše zadovoljstvo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>In quos vero dolorem atque fugiat sed necessitatibus.
            </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Realizovanih putovanja</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Lojalnih putnika</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Godina postojanja</h6>
              </div>
            </div>
          </Col>
            
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* -------------------------------------------- sekcija iskustvo ------------------------------------------------------------------- */}

    {/* -------------------------------------------- galerija --------------------------------------------------------------------------- */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Galerija'} />
            <h2 className='gallery__title'>Fotografije naših putnika</h2>
          </Col>

          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* -------------------------------------------- galerija --------------------------------------------------------------------------- */}

    {/* -------------------------------------------- sekcija utisci --------------------------------------------------------------------- */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Utisci'} />
            <h2 className='testimonial__title'>Reči naših putnika</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/* -------------------------------------------- sekcija utisci --------------------------------------------------------------------- */}

    <Newsletter />
    </>
}

export default Home