import { Link } from 'react-router-dom';
import UseCase from '../components/pagination/useCase';
// import CustomCarousel from '../components/carousel/CustomCarousel';

const Index = () => {
  //for CustomCarousel
  // const carouselLinks = [
  //   { id: 1, url: 'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg' },
  //   { id: 2, url: 'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg' },
  //   { id: 3, url: 'https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg' },
  //   { id: 4, url: 'https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg' },
  // ];

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={'./signup'}>Signup</Link> <br />
      <Link to={'./completeprofile'}>complete profile</Link> <br />
      <Link to={'./signin'}>Signin</Link> <br />
      <Link to={'./forgotpassword'}>forgot password</Link> <br />
      <Link to={'./passwordreset'}>Reset Password</Link>
      <UseCase />
    </div>
  );
};

export default Index;
