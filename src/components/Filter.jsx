import React, { useState, useEffect } from 'react';
import './Filter.css';

export const Filter = () => {
  const [activeTab, setActiveTab] = useState('accommodation');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledDistance = window.scrollY;
      if (scrolledDistance > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={`con-filter ${scrolled ? 'expanded' : ''}`}>
            <div className="filter-bar">

            </div>
      </div>
    </>
  );
};
