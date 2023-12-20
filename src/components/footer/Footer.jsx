// import footerItems from './footerItems';
import { Link } from 'react-router-dom';

import academyLogo from '../../assets/svg/academyLogo.svg';
import linkedIn from '../../assets/svg/linkedIn.svg';
import twitter from '../../assets/svg/twitter.svg';
import threads from '../../assets/svg/threads.svg';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/instagram.svg';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gray-700 text-neutral-content h-40 flex justify-between items-center">
        <aside className="pl-16">
          <img src={academyLogo} alt="academy-logo" />
        </aside>

        <div>
          <p className=" text-base opacity-60">© 2023 i-Academy, All rights reserved.</p>
        </div>

        <nav className="pr-3">
          <div className="flex gap-4 ">
            <Link to="/">
              <img src={linkedIn} alt="linkedIn-logo" />
            </Link>
            <Link to="/">
              <img src={twitter} alt="twitter-logo" />
            </Link>
            <Link to="/">
              <img src={threads} alt="thread-logo" />
            </Link>
            <Link to="/">
              <img src={facebook} alt="facebook-logo" />
            </Link>
            <Link to="/">
              <img src={instagram} alt="instagram-logo" />
            </Link>

            <a></a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
