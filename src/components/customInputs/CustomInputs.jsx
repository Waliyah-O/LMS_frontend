import { FC, ReactElement } from 'react';
import FormError from '../formError';

const Input = ({ name, type = 'text', label, formik, info, icon, cssStyles, ...props }) => {
  return (
    <div className="input">
      <label htmlFor={props.id} className={'text-neutral-700 font-normal'}>
        {label}
      </label>
      <div
        className={`input__container rounded-lg border ${
          formik && formik?.errors[name]
            ? 'border border-error-main shadow-error focus-within:shadow-error focus-within:border-error-main '
            : 'focus-within:shadow-active focus-within:border-primary-500 '
        }${!props?.disabled ? (props?.value ? 'border-neutral-600' : 'border-neutral-300') : ''}`}
      >
        <input type={type} name={name} {...props} className={`${cssStyles} rounded-lg focus:outline-none text-neutral-700`} />
        {icon && icon}
      </div>

      {info && <span className={'input__info text-neutral-300'}>{info}</span>}
      <FormError errors={formik && formik?.errors} name={name} value={formik && formik.values[name]} />
    </div>
  );
};
export default Input;
