import { Link } from 'react-router-dom';
import Button from '../button';
import { ButtonSize, ButtonState } from '../button/enum';

const MobileMenu = ({ menuItems }) => {
  const closeMenu = () => {
    const drawerCheckbox = document.getElementById('my-drawer-4');
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div>
      <div className="drawer drawer-end z-10">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
            {menuItems &&
              menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className="font-bold bg-transparent hover:border-b-2 border-red-500 p-4 my-2"
                    to={item.to}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            <Button variant={ButtonState.MOBILE} size={ButtonSize.md} value="Sign Up" onClick={closeMenu} />
            <Button variant={ButtonState.SECONDARY} size={ButtonSize.md} value="Book a demo" onClick={closeMenu} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
