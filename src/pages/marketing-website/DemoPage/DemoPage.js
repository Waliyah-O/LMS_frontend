import CustomRadioButton from '../../../components/customInputs/CustomRadioButton';
import CustomInput from '../../../components/customInputs/CustomInputs';
import Hero from '../../../components/heroSection/Hero';
import { useFormik } from 'formik';
import demoImg from '../../../assets/images/demo.png';
import CustomSelect from '../../../components/customInputs/CustomSelect';
import Button from '../../../components/button';
import { ButtonState } from '../../../components/button/enum';

const DemoPage = () => {
  const checkboxOptions = [
    { label: 'A investor/shareholder', position: 1 },
    { label: 'A business or corporate body', position: 2 },
  ];

  const discoveredBy = [
    { position: 1, label: 'LinkedIn' },
    { position: 2, label: 'Instagram' },
  ];
  const formik = useFormik({});
  return (
    <div>
      <Hero mainText={`Get in Touch\nConnect with Us Today`} />

      <section>
        <aside>
          <img src={demoImg} />
          <h1 className="font-inter font-bold text-lg-heading">Request a Live Demo</h1>
          <p>{`We're here to help! Contact our experts for personalised guidance and support on your financial journey.`}</p>
          <form onSubmit={formik.handleSubmit}>
            <CustomInput labelText="Full Name" type={'text'} />
            <CustomRadioButton options={checkboxOptions} />
            <CustomInput labelText="Email" type={'email'} />
            <CustomInput labelText="Organisation (business or corporate body)" type={'text'} />
            <CustomSelect labelText={'How did you learn about iaLMS?'} options={discoveredBy} optionText={'Select an option'} />

            <div className="flex">
              <Button value="Cancel" variant={ButtonState.LIST} />
              <Button value="Next" variant={ButtonState.SECONDARY} />
            </div>
          </form>
        </aside>
      </section>
    </div>
  );
};

export default DemoPage;
