import { useFormik } from 'formik';
import { useState } from 'react';
import Hero from '../../../components/heroSection/Hero';
import TextArea from '../../../components/customInputs/TextArea';
import CustomInput from '../../../components/customInputs/CustomInputs';
import { ContactUsForm } from '../../../validations/auth.validation';
import SpotlightProduct from '../../../components/spotlightProduct/SpotlightProduct';

const ContactPage = () => {
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      message: '',
    },
    validationSchema: ContactUsForm,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      setTimeout(() => {
        // showToast(
        //   <>
        //     Message Sent <br />
        //   </>,
        //   'success',
        //   {
        //     position: 'top-right',
        //     autoClose: 3000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     style: {
        //       backgroundColor: 'rgba(0, 100%, 0, 0)',
        //       color: '#148519',
        //       fontWeight: 'bold',
        //     },
        //   }
        // );

        setLoading(false); // Reset loading state
        console.log(values);
        resetForm();
      }, 2000);
    },
  });

  return (
    <div>
      <Hero mainText={`Get in Touch\nConnect with Us Today`} />
      <section>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            name={'firstName'}
            labelText={'First name'}
            placeholder={'Enter your first name'}
            required={true}
            type={'text'}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            inputError={formik.touched.firstName && formik.errors.firstName}
          />

          <CustomInput
            name={'lastName'}
            labelText={'Last name'}
            placeholder={'Enter your last name'}
            required={true}
            type={'text'}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            inputError={formik.touched.lastName && formik.errors.lastName}
          />

          <CustomInput
            name={'email'}
            labelText={'Email'}
            placeholder={'example@mail.com'}
            required={true}
            type={'email'}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            inputError={formik.touched.email && formik.errors.email}
          />

          <CustomInput
            name={'phoneNum'}
            labelText={'Phone number'}
            placeholder={'234 xxx xxx xxxx'}
            required={true}
            type={'number'}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phoneNum}
            inputError={formik.touched.phoneNum && formik.errors.phoneNum}
          />

          <TextArea
            name={'message'}
            onBlur={formik.handleBlur}
            required={true}
            onChange={formik.handleChange}
            value={formik.values.message}
            labelText={'Your Message'}
            placeholder={'Enter your message'}
            inputError={formik.touched.message && formik.errors.message}
          />

          <button
            className={`btn bg-red-500 xl:btn-md w-1/5 capitalize mt-6 text-white`}
            // disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
            type="submit"
          >
            {isLoading ? (
              <>
                <span className={`loading loading-bars`} />
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </section>

      <SpotlightProduct />
    </div>
  );
};

export default ContactPage;
