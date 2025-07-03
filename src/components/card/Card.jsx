import React from 'react'
import './Card.css'


const Card = ({ image, title, description }) => {
  
    return (
    <div className="card">
      <img src={image} alt={title} width="100" height="100" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};


export default Card;