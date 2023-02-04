import React,{useRef} from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {


    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async() => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        //console.log(location);

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert('Sva polja su obavezna!');
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
        //console.log(res);
        
        if (!res.ok) {
            alert('Something went wrong');
        }

        const result = await res.json();

        //console.log(SearchBar)
        console.log(result.data)
        navigate(`/tours/search/?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
            { state: result.data });
    };

  return (
      <Col lg='12'>
          <div className="search__bar">
              <Form className='d-flex align-items-center gap-4'>
                  <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                      <span>
                          <i class="ri-map-pin-line"></i>
                      </span>
                      <div>
                          <h6>Lokacija</h6>
                          <input type='text' placeholder='Gde putujete?' ref={locationRef} />
                      </div>
                  </FormGroup>

                  <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                      <span>
                          <i class="ri-map-pin-time-line"></i>
                      </span>
                      <div>
                          <h6>Udaljenost</h6>
                          <input type='number' placeholder='Udaljenost u km' ref={distanceRef} />
                      </div>
                  </FormGroup>

                  <FormGroup className='d-flex gap-3 form__group form__group-last'>
                      <span>
                          <i class="ri-group-fill"></i>
                      </span>
                      <div>
                          <h6>Maksimalan broj putnika</h6>
                          <input type='number' placeholder='0' ref={maxGroupSizeRef}/>
                      </div>
                  </FormGroup>

                  <span className='search__icon' type='submit' onClick={searchHandler}>
                      <i class="ri-search-line"></i>
                  </span>
              </Form>
          </div>
      </Col>
  )
}

export default SearchBar