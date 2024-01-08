import { ErrorBoundary } from 'react-error-boundary';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ErrorUI } from '../error/ErrorUi';
import { ReactComponent as ArrowNarrowLeft } from '../../assets/svg/arrow_narrow_left.svg';
import authImg from '../../assets/images/authImg.png';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const AuthLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-evenly gap-24 bg-white md:p-5 lg:p-16">
        <ErrorBoundary FallbackComponent={ErrorUI}>
          <div className="relative [background-color:rgba(83,85,90,0.35)] [width:524px] [height:460px] rounded-3xl hidden lg:block">
            <h3 className="font-extrabold text-white font-sora [font-size:32px] absolute top-20 right-6 ">Organization</h3>
            <img className="[width:369px] [height:507px] absolute bottom-0 left-0" src={authImg} />
          </div>

          <div className="sm:w-full lg:w-3/5  flex-col items-center sm:p-2 p-4">
            <div className="flex flex-col items-start gap-10">
              <Link className="flex gap-2 items-center" to="/">
                <ArrowNarrowLeft />
                <span className="text-black font-medium text-small">Go Home</span>
              </Link>

              <div className="w-full lg:3/5 flex flex-col gap-6 items-start justify-center">
                <nav className="gap-10 p-4 sm:w-full md:flex-row flex-col lg:flex  lg:flex-row w-full items-center inline-flex font-medium text-small ">
                  <NavLink
                    to="/signup"
                    className={({ isActive }) => (isActive ? 'text-red-650 border-b-2 border-red-650 py-4' : 'py-4')}
                  >
                    New? Create an Account
                  </NavLink>

                  <NavLink
                    className={({ isActive }) => (isActive ? 'text-red-650 border-b-2 border-red-650 py-4' : 'py-4')}
                    to="/signin"
                  >
                    Have an account? Sign in
                  </NavLink>
                </nav>

                <div className="w-full sm:flex items-center justify-start sm:text-xl-heading md:items-start lg:text-xl-heading font-semibold [color:#53555A]">
                  <h1 className="my-2">{location.pathname.includes('signup') ? 'Create Account as...' : 'Sign in'}</h1>
                </div>

                <div className="w-full mb-5">
                  <nav className="flex items-center gap-6 md:flex-row md:justify-center lg:flex flex-col lg:justify-start">
                    <NavLink
                      to="organization"
                      className={({ isActive }) =>
                        isActive
                          ? 'py-2 px-5 [background-color:#D43325] rounded-lg  text-white'
                          : 'py-2 px-5 [background-color:#E5E7EB] rounded-lg '
                      }
                    >
                      Organization
                    </NavLink>

                    <NavLink
                      to="tutor"
                      className={({ isActive }) =>
                        isActive
                          ? 'py-2 px-5 [background-color:#D43325] rounded-lg  text-white'
                          : 'py-2 px-5 [background-color:#E5E7EB] rounded-lg '
                      }
                    >
                      Tutor
                    </NavLink>

                    <NavLink
                      to="student"
                      className={({ isActive }) =>
                        isActive
                          ? 'py-2 px-5 [background-color:#D43325] rounded-lg  text-white'
                          : 'py-2 px-5 [background-color:#E5E7EB] rounded-lg '
                      }
                    >
                      Student
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>

            <div>{children}</div>

            <Outlet />
          </div>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;

/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ErrorUI } from '../error/ErrorUi';
// import { ReactComponent as ArrowNarrowLeft } from '../../assets/svg/arrow_narrow_left.svg';
// import authImg from '../../assets/images/authImg.png';
// import Navbar from '../navbar/Navbar';
// import Footer from '../footer/Footer';

// const AuthLayout = ({ children }) => {
//   const location = useLocation();

//   return (
//     <div>
//       <Navbar />
//       <div className="w-full flex justify-evenly gap-24 bg-white md:p-5 lg:p-16">
//         <ErrorBoundary FallbackComponent={ErrorUI}>
//           <div className="relative [background-color:rgba(83,85,90,0.35)] [width:524px] [height:460px] rounded-3xl hidden lg:block">
//             <h3 className="font-extrabold text-white font-sora [font-size:32px] absolute top-20 right-6 ">Organization</h3>
//             <img className="[width:369px] [height:507px] absolute bottom-0 left-0" src={authImg} />
//           </div>

//           <div className="w-full lg:w-1/2 p-4 sm:p-2">
//             <div className="flex flex-col items-start gap-4">
//               <Link className="flex gap-2 items-center" to="/">
//                 <ArrowNarrowLeft />
//                 <span className="text-black font-medium text-sm">Go Home</span>
//               </Link>

//               <nav className="flex gap-4">
//                 <NavLink
//                   to="/signup"
//                   onClick={() => {}}
//                   className={({ isActive }) => (isActive ? 'text-red-650 border-b-2 border-red-650 py-2' : 'py-2')}
//                 >
//                   New? Create an Account
//                 </NavLink>

//                 <NavLink
//                   to="/signin"
//                   onClick={() => {}}
//                   className={({ isActive }) => (isActive ? 'text-red-650 border-b-2 border-red-650 py-2' : 'py-2')}
//                 >
//                   Have an account? Sign in
//                 </NavLink>
//               </nav>

//               <div className="flex flex-col gap-4 items-start">
//                 <h1 className="text-2xl font-semibold text-gray-900">
//                   {location.pathname.includes('signup') ? 'Create Account as...' : 'Sign in'}
//                 </h1>

//                 <nav className="flex gap-4">
//                   <NavLink
//                     to="organization"
//                     onClick={() => {}}
//                     className={({ isActive }) =>
//                       isActive ? 'py-2 px-4 bg-red-650 text-white rounded-lg' : 'py-2 px-4 bg-gray-300 rounded-lg'
//                     }
//                   >
//                     Organization
//                   </NavLink>

//                   <NavLink
//                     to="tutor"
//                     onClick={() => {}}
//                     className={({ isActive }) =>
//                       isActive ? 'py-2 px-4 bg-red-650 text-white rounded-lg' : 'py-2 px-4 bg-gray-300 rounded-lg'
//                     }
//                   >
//                     Tutor
//                   </NavLink>

//                   <NavLink
//                     to="student"
//                     onClick={() => {}}
//                     className={({ isActive }) =>
//                       isActive ? 'py-2 px-4 bg-red-650 text-white rounded-lg' : 'py-2 px-4 bg-gray-300 rounded-lg'
//                     }
//                   >
//                     Student
//                   </NavLink>
//                 </nav>
//               </div>
//             </div>
//             <div>{children}</div>
//           </div>
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;
