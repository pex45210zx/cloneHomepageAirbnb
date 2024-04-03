import React, { useState, useEffect } from 'react';
import './NavBar.css';
import longlogo from '../assets/logos/long-logo.png';
import regions from '../assets/logos/regions.png';
import menu from '../assets/logos/menu.png';
import user from '../assets/logos/user.png';
import searchScope from '../assets/logos/search.png'

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState(null);
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
    <div className="con-page">
      <div className={`navbar ${scrolled ? 'expanded' : ''}`}>
        <div className={`navbar-bg ${scrolled ? 'expanded' : ''}`}></div>
        <form className={`topic ${scrolled ? 'expanded' : ''}`}>
          <p>hahah</p>
          <p>hahah</p>
          <p>hahah</p>
        </form>
        <div className={`search-bar ${scrolled ? 'expanded' : ''}`}>
          <p>
            hello world
          </p>
          <p>
            hello world
          </p>
          <p>
            hello world
          </p>
          <button className={`search-butt ${scrolled ? 'expanded' : ''}`}>
            <img src={searchScope} alt='search' />
          </button>
        </div>
      </div>
    </div>
  );
};
