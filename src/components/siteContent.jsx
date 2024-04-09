import React from 'react';
import Card from './Card.jsx';
import './siteContent.css';

const SiteContent = () => {
    return (
        <div className="con-content">
            <div className="card-area">
              <Card />
              <Card />
            </div>
        </div>
    );
}

export default SiteContent;
