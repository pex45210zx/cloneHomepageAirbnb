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
      const scrolledDistance = window.scrollY;
      const tablist = document.querySelector('.tablist-area');

      if (scrolledDistance > 50) {
        setScrolled(true);
        tablist.classList.add('hidden');
      } else {
        setScrolled(false);
        tablist.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    // Set the active tab to 0 (ที่พัก) when the component mounts
    setActiveTab(0);
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={`container ${scrolled ? 'container-scrolled' : ''}`}>
      <div className='Navbar-area'>
        <div className='brand'>
          <div className="logo-area">
            <img src={longlogo} alt='logo' />
          </div>
        </div>
        <div className="wrapper">
          <div className="tablist-area">
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
        <div className='user-region-area'>
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
      {activeTab === 0 && (
        <div className={`search-area1 ${scrolled ? 'search-scrolled' : ''}`}>
          <div className="search-bar1">
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
      )}
      {activeTab === 1 && (
        <div className={`search-area2 ${scrolled ? 'search-scrolled' : ''}`}>
          <div className="search-bar2">
            <button className='location'>
              <p className='title'>สถานที่</p>
              <p className='hint'>ค้นหาปลายทาง</p>
            </button>
            <button className='date'>
              <p className='title'>วันที่</p>
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
      )}
        <div className={`search-area3 ${scrolled ? 'search3-scrolled' : ''}`}>
          <div className="search-bar3">
            <button className='s3-butt'>
              <p className='s3-title1'>ที่ไหนก็ได้</p>
              <p className='s3-title2'>สัปดาห์ ทุกเวลา</p>
              <p className='s3-hint'>เพิ่มผู้เข้าพัก</p>
            </button>
            <button className="search-button2">
              <img src={search} alt='search' />
            </button>
          </div>
        </div>
    </div>
  );
};
