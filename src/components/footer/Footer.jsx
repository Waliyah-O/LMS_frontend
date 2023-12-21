// import footerItems from './footerItems';
import logo from '../../assets/svg/academy-logo-white-icon.svg';
import LinkedIn from '../../assets/svg/linkedIn.svg';
import xLogo from '../../assets/svg/x.svg';
import threadsLogo from '../../assets/svg/threads.svg';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/instagram.svg';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gray-700 text-neutral-content h-40 flex justify-between items-center">
        <aside className="pl-16">
          <img src={logo} alt="logo" />
        </aside>

        <div>
          <p className=" text-base opacity-60">© 2023 i-Academy, All rights reserved.</p>
        </div>

        <section className="pr-3">
          <div className="flex gap-4 ">
            <p>
              <img src={LinkedIn} alt="" />
            </p>

            <p>
              <img src={xLogo} alt="xLogo" />
            </p>

            <p>
              <img src={threadsLogo} alt="threadsLogo" />
            </p>

            <p>
              <img src={facebook} alt="facebook" />
            </p>

            <p>
              <img src={instagram} alt="instagram" />
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
