import React from "react";
import "./Popup.css";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'

export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
              <h1>{text}</h1>
    <Button onClick={closePopup}> Pokusajte ponovo!</Button>
     </div>
    </div>
  );
};