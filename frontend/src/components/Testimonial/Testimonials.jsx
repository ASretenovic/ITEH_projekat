import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true
                }
            },
             {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
            Oduševljen sam vašom organizacijom. Siguran sam da ćete biti moj izbor pri svakom narednom putovanju!
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounder-2' />
                <div>
                    <h6 className='mb-0 mt-3'>Marko Nikolic</h6>
                    <p>Korisnik</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            Moja ljubav prema putovanju traje od detinjstva. Uz vas je ona još veća!
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounder-2' />
                <div>
                    <h6 className='mb-0 mt-3'>Ana Tijanic</h6>
                    <p>Korisnik</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
           
            Svako putovanje je priča za sebe, a iskustvo nezaboravno!


            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounder-2' />
                <div>
                    <h6 className='mb-0 mt-3'>Nemanja Radovic</h6>
                    <p>Korisnik</p>
                </div>
            </div>
        </div>
        
        <div className="testimonial py-4 px-3">
            <p>
            Obišla sam svet zahvaljujući vama! Vi ste moj verni saputnik!
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounder-2' />
                <div>
                    <h6 className='mb-0 mt-3'>Ana Tijanic</h6>
                    <p>Korisnik</p>
                </div>
            </div>
        </div>
  </Slider>
}

export default Testimonials