import React, { useState, useContext } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';


import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext.js';
import {BASE_URL} from '../../utils/config.js';

const Booking = ({ tour, avgRating }) => {


    const { price, reviews, title } = tour;
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId: user && user.id,
        userEmail: user && user.email,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = e => {

        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };


    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    //send data to the server

    const handleClick = async e => {
        e.preventDefault();

        console.log(booking);

        try {
            if(!user || user===undefined || user===null)
            {
                return alert('Please sign in');
            }
            const res = await fetch(`${BASE_URL}/booking`, {
                method:'post',
                headers:{
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body:JSON.stringify(booking)
            });
            const result = await res.json();

            if(!res.ok)
            {
                return alert(result.message);
            }
        } catch (err) {
            alert(err.message);
        }

        navigate("/thank-you");
    }

    return (

        <div className="booking">
            <div className="booking__top d-flex
        align-items-center jusitfy-content-between">
                <h3>${price}
                    <span> / po osobi</span>
                </h3>
                
                <span className='tour__rating d-flex align-items-center'>
                    <i className="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>

            </div>

            {/* ----------- booking form ------------------ */}
            <div className="booking__form">
                <h5>Informacije</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Puno ime' id='fullName'
                            required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="text" placeholder='Telefon' id='phone'
                            required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookA'
                            required onChange={handleChange} />
                        <input type="number" placeholder='Gosti' id='guestSize'
                            required onChange={handleChange} />
                    </FormGroup>

                </Form>

            </div>
            {/* ----------- booking end ------------------ */}

            {/* -------- booking bottom --------------------- */}

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>
                            ${price} <i className="ri-close-line"></i> 1 osoba
                        </h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Trošak usluge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Ukupno:</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className='btn primary_btn w-100 mt-4' onClick={handleClick}>Rezerviši odmah</Button>
            </div>
        </div>
    );
};

export default Booking
