/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { ReactComponent as Checkmark } from '../../assets/svg/greyCheck.svg';
import { ReactComponent as Error } from '../../assets/svg/redError.svg';
import { ReactComponent as GreenCheck } from '../../assets/svg/greenCheck.svg';
import { hasCaps, hasDigit, hasSpecialCharacter } from '../../utils/constants';

const ErrorTexts = ({ text, isError, formik }) => (
  <div
    className={`flex items-center gap-2 ${
      !formik.touched.password ? 'text-gray-500' : isError ? 'text-red-500' : 'text-green-500'
    }`}
  >
    {formik.touched.password && formik.errors.password && isError && <Error />}
    {!formik.touched.password && isError && <Checkmark />}
    {formik.touched.password && !isError && <GreenCheck />}
    <span>{text}</span>
  </div>
);

const ErrorFields = ({ password, formik, className }) => {
  const [errors, setErrors] = useState({
    minLength: true,
    uppercase: true,
    specialCharacter: true,
    number: true,
  });

  useEffect(() => {
    setErrors({
      minLength: password.length >= 10,
      uppercase: hasCaps(password),
      specialCharacter: hasSpecialCharacter(password),
      number: hasDigit(password),
    });
  }, [password]);

  return (
    <div className={className}>
      <ErrorTexts text="Minimum of 10 characters" isError={!errors.minLength} formik={formik} />
      <ErrorTexts text="At least 1 uppercase letter" isError={!errors.uppercase} formik={formik} />
      <ErrorTexts text="At least 1 special character" isError={!errors.specialCharacter} formik={formik} />
      <ErrorTexts text="At least 1 number" isError={!errors.number} formik={formik} />
    </div>
  );
};

export default ErrorFields;
