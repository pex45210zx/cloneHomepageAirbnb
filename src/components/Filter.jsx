import React, { useState, useEffect } from 'react';
import './Filter.css';
import filterIcon from '../assets/filters/filter.png';
import checkIcon from '../assets/filters/check.png';

export const Filter = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

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

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <>
            <div className={`con-filter ${scrolled ? 'expanded' : ''}`}>
                <div className="filter-bar">
                    <div className="filter-icons"></div>
                    <div className="filter-menu">
                        <button className="filter-menu-butt">
                            <img src={filterIcon} alt="Filter Icon" />
                            <p>ตัวกรอง</p>
                        </button>
                    </div>
                    <div className="total-tax">
                        <label className="total-tax-butt">
                            <p>แสดงยอดรวมก่อนหักภาษี</p>
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                            <span className={`slider ${isChecked ? 'checked' : ''}`}>
                                <img src={checkIcon} alt="Check Icon" className="check-icon" />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};
