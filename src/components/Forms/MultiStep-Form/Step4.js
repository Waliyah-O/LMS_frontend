import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { choosePhoneNumber, chooseAddress, completeStep } from '../../../redux/actions';

const Step4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const phoneNumber = useSelector((state) => state.phoneNumber);
  const address = useSelector((state) => state.address);

  const formik = useFormik({
    initialValues: {
      phoneNumber: phoneNumber,
      address: address,
    },
    validationSchema: Yup.object({
      age: Yup.string().required('Age is required'),
      gender: Yup.string().required('Gender is required'),
    }),
    onSubmit: handleSubmit,
  });

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  function handleSubmit() {
    dispatch(choosePhoneNumber(formik.values.phoneNumber));
    dispatch(chooseAddress(formik.values.address));
    dispatch(completeStep('step4'));
    navigate('./result');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mx auto form-control w-full ">
          <label className="label">
            <span className="label-text">Phone Number: </span>
          </label>
          <input
            className="input input-bordered w-full "
            type="text"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
        </div>

        <div className="mx auto form-control w-full ">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            className="input input-bordered w-full "
            type="text"
            name="address"
            value={formik.values.address}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div> : null}
        </div>
        <div className="flex justify-center">
          <input className="mt-4 btn w-full  text-white" type="submit" value="Next" />
        </div>

        <Link className="flex justify-center" to="/step2">
          <button className="mt-2 btn w-full  text-white">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Step4;