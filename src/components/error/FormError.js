import React, { FC } from 'react';
import { Bullets } from '../../assets';
import { hasCaps, hasDigit, hasSpecialCharacter } from '../../constants';

const FormError = ({ errors, name, value }) => {
  return (
    <div>
      {name === 'password' ? (
        <div className={'ml-3 mt-2'}>
          {errors && errors[name] && (
            <>
              <div
                className={`flex text-labels ${value.length >= 8 ? 'text-neutral-400' : 'text-neutral-200'} items-center mb-2`}
              >
                <Bullets fill={value.length >= 8 ? '#56BC7C' : '#B0C1DA'} />{' '}
                <span className={'ml-2'}>Minimum of 8 characters</span>
              </div>
              <div className={`flex text-labels ${hasCaps(value) ? 'text-neutral-400' : 'text-neutral-200'}  items-center mb-2`}>
                <Bullets fill={hasCaps(value) ? '#56BC7C' : '#B0C1DA'} />
                <span className={'ml-2'}>At least 1 uppercase letter</span>
              </div>
              <div
                className={`flex text-labels ${
                  hasSpecialCharacter(value) ? 'text-neutral-400' : 'text-neutral-200'
                } items-center mb-2`}
              >
                <Bullets fill={hasSpecialCharacter(value) ? '#56BC7C' : '#B0C1DA'} />
                <span className={'ml-2'}>At least 1 special character</span>
              </div>
              <div className={`flex text-labels  ${hasDigit(value) ? 'text-neutral-400' : 'text-neutral-200'} items-center mb-2`}>
                <Bullets fill={hasDigit(value) ? '#56BC7C' : '#B0C1DA'} />
                <span className={'ml-2'}></span>At least 1 number
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
