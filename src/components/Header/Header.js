import React from 'react';
import "./Header.css";
import logoUrl from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className='header'>
        <img className='header__image' src={logoUrl} alt='Tesla Logo'/>
    </div>
  )
}

export default Header