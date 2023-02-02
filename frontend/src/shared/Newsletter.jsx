import React from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
    return <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Prijavite se i budite u toku sa najnovijim vestima</h2>

                        <div className="newsletter__input">
                            <input type='email' placeholder='Unesite mejl adresu..' />
                            <button className='btn newsletter__btn'>Prijavite se</button>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsum distinctio, voluptas consequuntur labore dolore minus.
                            Ratione vel distinctio illo quae aut aperiam amet quam nostrum cupiditate reiciendis! Fugit, nobis?</p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist}  />
                    </div> 
                </Col>
            </Row>
      </Container>
  </section>
}

export default Newsletter