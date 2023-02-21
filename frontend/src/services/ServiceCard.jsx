import React from 'react';
import './service-card.css';
import { Button } from 'reactstrap';


const ServiceCard = ({ item }) => {
    
    const { imgUrl, title, desc } = item;


    function getWeather() {
        var city = document.getElementById('city').value;
        var units = 'm';
        fetch('http://api.weatherstack.com/current?access_key=fe3a25556c23b0a4ae1ffed4faa140da&query='
        + city + '&units=' + units)
        .then(a => a.json())
        .then(response => {
            // alert(response?.current.weather_descriptions[0] + response?.current.temperature + ', feels like: ' + response?.current.feelslike);

            document.getElementById('output').innerHTML="<br><p>Brzina vetra: " + response?.current.wind_speed + " km/h <br>" + "Trenutna temperatura: " +
             response?.current.temperature+ "°C<br> Subjektivni osećaj: " + response?.current.feelslike + "°C</p>";

            
            document.getElementById('image').src = response?.current.weather_icons[0];
        })

    }
    

    return <div className="service__item">
        <div className="service__img">
            <img src={imgUrl} onClick={getWeather}/>
        </div>
        <h5>{title}</h5>
        <input className='city' type='text' id='city' placeholder='Unesi grad'/>
        <Button className='btn primary_btn w-80 mt-4' onClick={getWeather} id='dugme'>Trenutna temperatura</Button>
        <br/>
        <img src='' id='image' className='image_weather'/>
        <div className="output" id = 'output'></div>

  </div>
}

export default ServiceCard