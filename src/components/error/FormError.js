import { hasCaps, hasDigit, hasSpecialCharacter } from '../../utils/constants';

import { ReactComponent as Checkmark } from '../../assets/svg/greyCheck.svg';
import { ReactComponent as ErrorMark } from '../../assets/svg/redError.svg';
import { ReactComponent as PassMark } from '../../assets/svg/greenCheck.svg';

const FormError = ({ errors, name, value }) => {
  return (
    <div>
      {name === 'password' ? (
        <div className={'ml-3 mt-2'}>
          {errors && errors[name] && (
            <>
              <CheckmarkIcon condition={value.length >= 10} text="Minimum of 10 characters" />
              <CheckmarkIcon condition={hasCaps(value)} text="At least 1 uppercase letter" />
              <CheckmarkIcon condition={hasSpecialCharacter(value)} text="At least 1 special character" />
              <CheckmarkIcon condition={hasDigit(value)} text="At least 1 number" />
            </>
          )}
        </div>
      ) : (
        <p className={'text-error-main text-labels mt-2'}>{errors && errors[name]}</p>
      )}
    </div>
  );
};

// const CheckmarkIcon = ({ condition, text }) => (
//   <div className={`flex text-labels ${condition ? 'text-green-600' : 'text-neutral-200'} items-center mb-2`}>
//     {condition ? <PassMark /> : <Checkmark /> :!condition? <ErrorMark/>:<Checkmark/>}
//     <span className={`ml-2 ${condition ? 'text-green-600' : 'text-red-400'}`}>{text}</span>
//   </div>
// );

const CheckmarkIcon = ({ condition, text }) => (
  <div className={`flex text-labels ${condition ? 'text-green-600' : 'text-neutral-200'} items-center mb-2`}>
    {condition ? <PassMark /> : !condition ? <ErrorMark /> : <Checkmark />}
    <span className={`ml-2 ${condition ? 'text-green-600' : 'text-red-400'}`}>{text}</span>
  </div>
);

// const CheckmarkIcon = ({ condition, text }) => (
//   <div className={`flex text-labels ${condition ? 'text-green-600' : 'text-neutral-200'} items-center mb-2`}>
//     <Checkmark fill={condition ? passMark : errorMark} />
//     <span className={`ml-2 ${condition ? 'text-green-600' : 'text-red-400'}`}>{text}</span>
//   </div>
// );

export default FormError;
