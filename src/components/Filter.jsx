import React, { useState, useEffect, useRef } from 'react';
import './Filter.css';
import filterIcon from '../assets/filters/filter.png';
import checkIcon from '../assets/filters/check.png';
import { LinkImg } from '../assets/filters/filter-img';

export const Filter = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const iconAreaRef = useRef(null);

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

    const scrollLeft = () => {
        if (iconAreaRef.current) {
            const containerWidth = iconAreaRef.current.offsetWidth;
            const scrollLeft = iconAreaRef.current.scrollLeft;
            iconAreaRef.current.scrollTo({
                left: scrollLeft - (containerWidth * 0.5),
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (iconAreaRef.current) {
            const containerWidth = iconAreaRef.current.offsetWidth;
            const scrollLeft = iconAreaRef.current.scrollLeft;
            iconAreaRef.current.scrollTo({
                left: scrollLeft + (containerWidth * 0.5),
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className={`con-filter ${scrolled ? 'expanded' : ''}`}>
                <div className="filter-bar">
                    <div className="icon-area">
                        <div className="butt-left-area">
                            <button className="scroll-button-left" onClick={scrollLeft}>{"<"}</button>
                        </div>
                        <div className="filter-icons" ref={iconAreaRef}>
                            {LinkImg.map((imageUrl, index) => (
                                <div className="link-box">
                                    <img key={index} src={imageUrl.imgSrc} alt={`Image ${index}`} className='links-img' />
                                    <p>{imageUrl.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="butt-right-area">
                            <button className="scroll-button-right" onClick={scrollRight}>{">"}</button>
                        </div>
                    </div>
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
