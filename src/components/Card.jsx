import React from 'react';
import './Card.css'; // Your CSS file for card styles

const Card = () => {
    return (
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="Card" />
            <div className="card-details">
                <h2 className="card-title">Card Title</h2>
                <p className="card-description">Description of the card content goes here...</p>
                <button className="card-button">Book Now</button>
            </div>
        </div>
    );
}

export default Card;
