import React, { useState, useEffect } from 'react';
import './NavBar.css';
import longlogo from '../assets/logos/long-logo.png';
import regions from '../assets/logos/regions.png';
import menu from '../assets/logos/menu.png';
import user from '../assets/logos/user.png';
import searchScope from '../assets/logos/search.png'

export const NavBar = () => {
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

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="con-page">
      <div className={`navbar ${scrolled ? 'expanded' : ''}`}>
        <div className={`navbar-bg ${scrolled ? 'expanded' : ''}`}></div>
        <form className={`tablist ${scrolled ? 'expanded' : ''}`}>
          <div className={`tablist-butt ${activeTab === 'accommodation' ? 'active' : ''}`} onClick={() => handleTabClick('accommodation')}>
            <p className={`sty ${activeTab === 'accommodation' ? 'active' : ''}`}>ที่พัก</p>
          </div>
          <div className={`tablist-butt ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => handleTabClick('experience')}>
            <p className={`exp ${activeTab === 'experience' ? 'active' : ''}`}>เอ็กซ์พีเรียนซ์</p>
          </div>
          <button className='tablist-butt'>
            <p className='expol'>เอ็กซ์พีเรียนซ์ออนไลน์</p>
          </button>
        </form>
        <div className={`search-bar ${scrolled ? 'expanded' : ''}`}>
          <button className={`search-lo ${scrolled ? 'expanded' : ''}`}>
            <span>
              สถานที่
            </span>
            <p>
              ค้นหาปลายทาง
            </p>
          </button>
          <div className={`bar-btw0 ${scrolled ? 'expanded' : ''}`}></div>

          {activeTab === 'accommodation' && (
            <div className="form-chkinout">
              <button className={`search-in ${scrolled ? 'expanded' : ''}`}>
                <span>
                  เช็คอิน
                </span>
                <p>
                  เพิ่มวันที่
                </p>
              </button>
              <div className="bar-btw1"></div>
              <div className="bar-btw2"></div>
              <div className="bar-btw3"></div>
              <button className={`search-out ${scrolled ? 'expanded' : ''}`}>
                <span>
                  เช็คเอาท์
                </span>
                <p>
                  เพิ่มวันที่
                </p>
              </button>
              <div className="bar-btw4"></div>
            </div>
          )}

          {activeTab === 'experience' && (
          <div className="form-chkinout">
            <button className={`search-date ${scrolled ? 'expanded' : ''}`}>
              <span>
                วันที่
              </span>
              <p>
                เพิ่มวันที่
              </p>
            </button>
            <div className="bar-btw1"></div>
            <div className="bar-btw7"></div>
            <div className="bar-btw4"></div>
          </div>
          )}

          <button className={`search-who ${scrolled ? 'expanded' : ''}`}>
            <span>
              ใคร
            </span>
            <p>
              เพิ่มผู้เข้าพัก
            </p>
          </button>
          <div className={`bar-btw5 ${scrolled ? 'expanded' : ''}`}></div>
          <div className={`bar-btw6 ${scrolled ? 'expanded' : ''}`}></div>
          <button className={`search-butt ${scrolled ? 'expanded' : ''}`}>
            <img src={searchScope} alt='search' />
          </button>
        </div>
      </div>
    </div>
  );
};
