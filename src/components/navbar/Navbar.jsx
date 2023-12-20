import { useState } from 'react';
import logo from '../../assets/svg/academy-logo-red-icon.svg';

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <nav className="bg-black text-white flex gap-12 h-20 items-center pt-6 pl-16">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="flex gap-10 font-medium">
          <p
            className={`cursor-pointer ${
              selectedTab === 'candidates'
                ? 'border-b-2 border-red-500 text-red-500'
                : 'border-b-2 border-transparent hover:border-red-500'
            }`}
            onClick={() => handleTabClick('candidates')}
          >
            For Candidates
          </p>
          <p
            className={`cursor-pointer ${
              selectedTab === 'organization'
                ? 'border-b-2 border-red-500 text-red-500'
                : 'border-b-2 border-transparent hover:border-red-500'
            }`}
            onClick={() => handleTabClick('organization')}
          >
            For Organization
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
