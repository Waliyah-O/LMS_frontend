import { useState } from 'react';
import SideBar from '../sidebar/SideBar';

const Navbar = ({ title }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const searchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="navbar h-20 bg-teal-800">
      <div className="navbar-start">
        <SideBar />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">{title}</a>
        <h2 className="text-lg text-base-100">Learning Management System</h2>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle text-base-100" onClick={searchToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-base-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {isSearchVisible && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input w-50 h-9 rounded-md border-solid border-2 border-gray focus:outline-green-900"
            />
          </div>
        )}
        <button className="btn btn-ghost px-5 btn-circle relative">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-base-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-sm text-base-100 absolute top-0 right-0 -mt-1 -mr-1"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
