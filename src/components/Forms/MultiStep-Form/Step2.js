import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { chooseEmail, choosePassword, completeStep } from '../../../redux/actions/user.actions';

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);

  const formik = useFormik({
    initialValues: {
      email: email,
      password: password,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(10, 'Password must be 10 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
      confirm: Yup.string().oneOf([Yup.ref('pass'), null], 'Passwords must match'),
    }),
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    dispatch(chooseEmail(values.email));
    dispatch(choosePassword(values.password));
    dispatch(completeStep('Step2'));
    navigate('./step3');
  }

  return (
    <Formik>
      <form onSubmit={formik.handleSubmit}>
        <div className="mx auto form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email: </span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        </div>

        <div className="mx auto form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
        </div>
        <div className="flex justify-center">
          <input className="btn w-full max-w-xs text-white" type="submit" value="Next" />
        </div>

        <Link className="flex justify-center" to="/">
          <button className="mt-2 btn w-full max-w-xs text-white">Back</button>
        </Link>
      </form>
    </Formik>
  );
};

export default Step2;
