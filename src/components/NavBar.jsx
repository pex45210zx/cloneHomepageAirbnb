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
        <form className={`tablist ${scrolled ? 'expanded' : ''}`}>
          <button className='tablist-butt'>
            <p>ที่พัก</p>
          </button>
          <button className='tablist-butt'>
            <p>เอ็กซ์พีเรียนซ์</p>
          </button>
          <button className='tablist-butt'>
            <p>เอ็กซ์พีเรียนซ์ออนไลน์</p>
          </button>
        </form>
        <div className={`search-bar ${scrolled ? 'expanded' : ''}`}>
          <button className='search-lo' >
            <span>
              สถานที่
            </span>
            <p>
              ค้นหาปลายทาง
            </p>
            <div className="bar-btw"></div>
          </button>
          <button className='search-in' >
            <span>
              เช็คอิน
            </span>
            <p>
              เพิ่มวันที่
            </p>
          </button>
          <button className='search-out' >
            <span>
              เช็คเอาท์
            </span>
            <p>
              เพิ่มวันที่
            </p>
          </button>
          <button className='search-who' >
            <span>
              ใคร
            </span>
            <p>
              เพิ่มผู้เข้าพัก
            </p>
          </button>
          <button className={`search-butt ${scrolled ? 'expanded' : ''}`}>
            <img src={searchScope} alt='search' />
          </button>
        </div>
      </div>
    </div>
  );
};
