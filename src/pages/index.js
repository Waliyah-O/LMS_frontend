import { Link } from 'react-router-dom';
import CheckBox from '../components/customInputs/CheckBox';
import RadioButton from '../components/customInputs/RadioButton';
import TextArea from '../components/customInputs/TextArea';

const index = () => {
  const countryOptions = [
    { position: 1, label: 'Nigeria' },
    { position: 2, label: 'Ghana' },
    { position: 3, label: 'Egypt' },
    { position: 4, label: 'Togo' },
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
      <RadioButton options={countryOptions} className={'radio-success checked:bg-green-700'} labelText={'Pick one'} />
      <TextArea labelText={'Enter Message'} placeholder={'Enter text....'}/>
    </div>
  );
};

export default index;
