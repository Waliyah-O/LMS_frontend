import { ReactComponent as Bullets } from '../../assets/svg/formvalue-error.svg';
import { hasCaps, hasDigit, hasSpecialCharacter } from '../../utils/constants';

const FormError = ({ errors, name, value }) => {
  return (
    <div>
      {name === 'password' ? (
        <div className={'ml-3 mt-2'}>
          {errors && errors[name] && (
            <>

              <div className={`flex text-labels ${value.length >= 8 ? 'text-green-600' : 'text-neutral-200'} items-center mb-2`}>
                <Bullets fill={value.length > 8 ? '#56BC7C' : '#d45757'} />
                <span className={` ml-2 ${value.length > 8 ? 'text-green-600' : 'text-red-400'}`}>
                  Minimum of 8 characters
                </span>
              </div>

              <div className={`flex text-labels ${hasCaps(value) ? 'text-green-600' : 'text-neutral-200'}  items-center mb-2`}>
                <Bullets fill={hasCaps(value) ? '#56BC7C' : '#d45757'} />
                <span className={`ml-2 ${hasCaps(value) ? 'text-green-600' : 'text-red-400'}`}>
                  At least 1 uppercase letter
                </span>
              </div>

              <div
                className={`flex text-labels ${
                  hasSpecialCharacter(value) ? 'text-green-600' : 'text-neutral-200'
                } items-center mb-2`}
              >
                <Bullets fill={hasSpecialCharacter(value) ? '#56BC7C' : '#d45757'} />
                <span className={`ml-2 ${hasSpecialCharacter(value) ? 'text-green-600' : 'text-red-400'}`}>
                  At least 1 special character
                </span>
              </div>

              <div className={`flex text-labels  ${hasDigit(value) ? 'text-green-600' : 'text-neutral-200'} items-center mb-2`}>
                <Bullets fill={hasDigit(value) ? '#56BC7C' : '#d45757'} />
                <span className={`ml-2 ${hasDigit(value) ? 'text-green-600' : 'text-red-400'}`}>At least 1 number</span>
              </div>
            </>
          )}
        </div>
      ) : (
        <p className={'text-error-main text-labels mt-2'}>{errors && errors[name]}</p>
      )}
    </div>
  );
};
export default FormError;
