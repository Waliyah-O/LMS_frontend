/* eslint-disable no-unused-vars */
import { useState } from 'react';
import logo from '../../assets/svg/academy-logo-red-icon.svg';
import { NavLink, Link } from 'react-router-dom';
import MobileMenu from '../mobileMenu';

const Navbar = () => {
  const menuItems = [
    { label: 'For Candidates', to: '#' },
    { label: 'For Organizations', to: '#' },
    { label: 'Why i-Academy', to: 'why' },
    { label: 'Organization Benefits', to: 'benefits' },
    { label: 'FAQs', to: 'faq' },
    { label: 'Contact us', to: '#' },
  ];

  return (
    <div>
      <nav className="bg-black text-white flex gap-12 h-20 items-center pt-11 p-4 md:pl-16">
        <div className="flex justify-between items-center w-full md:w-auto ">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <MobileMenu menuItems={menuItems} />
          </div>
        </div>

        <div className="hidden md:flex gap-10 font-medium">
          <NavLink className={({ isActive }) => [isActive ? 'border-b-2 border-red-500 text-red-500' : '']} to="/dashboard">
            For Candidates
          </NavLink>

          <NavLink className={({ isActive }) => [isActive ? 'border-b-2 border-red-500 text-red-500' : '']} to="/">
            For Organizations
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
