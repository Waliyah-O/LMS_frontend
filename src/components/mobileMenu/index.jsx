// const MobileMenu = () => {
//   return (
//     <div>
//       <div className="drawer drawer-end">
//         <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content">
//           {/* Page content here */}
//           {/* the folowing line has the  button to trigger the drawer */}
//           <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
//             </svg>
//           </label>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//             {/* Sidebar content here */}
//             <li>
//               <a>Sidebar Item 1</a>
//             </li>
//             <li>
//               <a>Sidebar Item 2</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;
import { Link } from 'react-router-dom';
import Button from '../button';
import { ButtonSize, ButtonState } from '../button/enum';

const MobileMenu = ({ menuItems }) => {
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
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {menuItems &&
              menuItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            <Button variant={ButtonState.MOBILE} size={ButtonSize.md} value="Sign Up" />
            <Button variant={ButtonState.SECONDARY} size={ButtonSize.md} value="Book a demo" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
