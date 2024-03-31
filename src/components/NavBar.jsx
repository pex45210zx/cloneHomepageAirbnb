import React, { useState, useEffect } from 'react';
import './NavBar.css';
import longlogo from '../assets/logos/long-logo.png';
import regions from '../assets/logos/regions.png';
import menu from '../assets/logos/menu.png';
import user from '../assets/logos/user.png';
import search from '../assets/logos/search.png'

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={scrolled ? 'container-area' : 'container'}>
      <div className="Navbar-area">
        <div className="brand">
          <div className="logo-area">
            <img src={longlogo} alt='logo' />
          </div>
        </div>
        <div className="wrapper">
          <div className="tablist-area" style={{ pointerEvents: scrolled ? 'none' : 'auto' }}>
            <div className="tablist">
              <button
                className={`tab-option ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => handleTabClick(0)}
              >
                ที่พัก
              </button>
              <button
                className={`tab-option ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Experiences
              </button>
              <button
                className={`tab-option ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Experiences Online
              </button>
            </div>
          </div>
        </div>
        <div className="user-region-area">
          <div className="region">
            <div className="your-region">
              <button className='user-region'>ให้เช่าที่พักกับ Airbnb</button>
            </div>
            <div className="choose-lang-region">
              <a href="">
                <img src={regions} alt='regions' />
              </a>
            </div>
          </div>
          <div className="profile-area">
            <button className='menu-profile'>
              <img className='menu' src={menu} alt="menu" />
              <img className='user' src={user} alt="user" />
            </button>
          </div>
        </div>
      </div>
      <div className="search-area">
        <div className="search-bar">
          <button className='location'>
            <p className='title'>สถานที่</p>
            <p className='hint'>ค้นหาปลายทาง</p>
          </button>
          <button className='check-in'>
            <p className='title'>เช็คอิน</p>
            <p className='hint'>เพิ่มวันที่</p>
          </button>
          <button className='check-out'>
            <p className='title'>เช็คเอาท์</p>
            <p className='hint'>เพิ่มวันที่</p>
          </button>
          <button className='who'>
            <p className='title'>ใคร</p>
            <p className='hint'>เพิ่มผู้เข้าพัก</p>
          </button>
          <button className="search-button">
            <img src={search} alt='search' />
          </button>
        </div>
      </div>
    </div>
  );
};
