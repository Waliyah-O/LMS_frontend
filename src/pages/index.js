import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={'./signup'}>Signup</Link> <br/>
      <Link to={'./signup.completeprofile'}>complete profile</Link> <br/>
      <Link to={'./signin'}>Signin</Link> <br/>
      <Link to={'./forgotpassword'}>forgot password</Link>
    </div>
  );
};

export default index;
