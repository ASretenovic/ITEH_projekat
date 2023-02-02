import React from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'

const Booking = ({tour, avgRating}) => {


const {price, reviews} = tour;

const handleChange = e =>{

}

  return (
   
    <div className="booking">
        <div className="booking__top d-flex
        align-items-center jusitfy-content-between">
            <h3>${price}
            <span> / po osobi</span>
            </h3>
            <span className='tour__rating d-flex align-items-center'>
                      <i class="ri-star-fill"></i> 
                      {avgRating === 0 ? null : avgRating} ({reviews?.length})

            </span>
        </div>
        {/* ----------- booking form ------------------ */}
        <div className="booking__form">
            <h5>Informacije</h5>
            <Form className='booking__info-form'>
                <FormGroup>
                    <input type="text" placeholder='Puno ime' id='fullName'
                    required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Telefon' id='phone'
                    required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id='bookA'
                    required onChange={handleChange}/>
                      <input type="number" placeholder='Gosti' id='guestSize'
                    required onChange={handleChange}/>
                </FormGroup>

            </Form>
        </div>
        {/* ----------- booking end ------------------ */}
    </div>
  );
};

export default Booking
