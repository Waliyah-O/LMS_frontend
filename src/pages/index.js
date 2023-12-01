import { Link } from 'react-router-dom';
import Pagination from '../components/pagination'
import { useState } from 'react';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={'./signup'}>Signup</Link> <br />
      <Link to={'./completeprofile'}>complete profile</Link> <br />
      <Link to={'./signin'}>Signin</Link> <br />
      <Link to={'./forgotpassword'}>forgot password</Link> <br />
      <Link to={'./passwordreset'}>Reset Password</Link>
      <Pagination totalPages={totalPage} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default Index;
