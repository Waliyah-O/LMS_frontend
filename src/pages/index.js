import { Link } from 'react-router-dom';
import CheckBox from '../components/customInputs/CheckBox';
import RadioButton from '../components/customInputs/RadioButton';
import TextArea from '../components/customInputs/TextArea';

const index = () => {
  const countryOptions = [
    { position: 1, label: 'Nigeria' },
    { position: 2, label: 'Ghana' },
    { position: 3, label: 'Ghana' },
    { position: 4, label: 'Ghana' },
    { position: 5, label: 'Ghana' },
    { position: 6, label: 'Ghana' },
  ];
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={'./signup'}>Signup</Link> <br />
      <Link to={'./completeprofile'}>complete profile</Link> <br />
      <Link to={'./signin'}>Signin</Link> <br />
      <Link to={'./forgotpassword'}>forgot password</Link> <br />
      <Link to={'./passwordreset'}>Reset Password</Link>
      <CheckBox options={countryOptions} labelText={'Check Box'} className={'checkbox-success'} />
      <RadioButton options={countryOptions} className={'radio-success'} />
      <TextArea labelText={'Enter Message'}/>
    </div>
  );
};

export default index;
