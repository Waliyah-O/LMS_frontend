import { Link } from 'react-router-dom';
import CheckBox from '../components/customInputs/CheckBox';
import RadioButton from '../components/customInputs/RadioButton';
import TextArea from '../components/customInputs/TextArea';

// import CustomCarousel from '../components/carousel/CustomCarousel';

const index = () => {
  const countryOptions = [
    { position: 1, label: 'Nigeria' },
    { position: 2, label: 'Ghana' },
    { position: 3, label: 'Egypt' },
    { position: 4, label: 'Togo' },
  ];

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
      <CheckBox options={countryOptions} labelText={'Check Box'} className={'checkbox-success'} />
      <RadioButton options={countryOptions} className={'radio-success checked:bg-green-700'} labelText={'Pick one'} />
      <TextArea labelText={'Enter Message'} placeholder={'Enter text....'} />
      {/* <CustomCarousel carouselImgSrc={carouselLinks} /> */}
    </div>
  );
};

export default index;
