/* eslint-disable no-unused-vars */
import { useState } from 'react';
import logo from '../../assets/svg/academy-logo-red-icon.svg';
import { Link } from 'react-router-dom';
import MobileMenu from '../mobileMenu';

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const menuItems = [
    { label: 'For Candidates', to: '#' },
    { label: 'For Organizations', to: '#' },
    { label: 'Why i-Academy', to: '/why' },
    { label: 'Organization Benefits', to: '/benefits' },
    { label: 'FAQs', to: '/faq' },
    { label: 'Contact us', to: '#' },
  ];

  return (
    <div>
      <nav className="bg-black text-white flex gap-12 h-20 items-center pt-6 p-4 md:pl-16">
        <div className="flex justify-between items-center w-full md:w-auto ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="md:hidden">
            <MobileMenu menuItems={menuItems} />
          </div>
        </div>

        <div className="hidden md:flex gap-10 font-medium">
          <Link
            className={`cursor-pointer ${
              selectedTab === 'candidates'
                ? 'border-b-2 border-red-500 text-red-500'
                : 'border-b-2 border-transparent hover:border-red-500'
            }`}
            onClick={() => handleTabClick('candidates')}
          >
            For Candidates
          </Link>
          <Link
            className={`cursor-pointer ${
              selectedTab === 'organization'
                ? 'border-b-2 border-red-500 text-red-500'
                : 'border-b-2 border-transparent hover:border-red-500'
            }`}
            onClick={() => handleTabClick('organization')}
          >
            For Organizations
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
