import { identityService } from '../../services';
import { showToast } from '../../utils';
import * as types from '../types';

export const loginAsync = (loginData, successCallback, errorCallback) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN.REQUEST });
    try {
      const responseData = await identityService.login(loginData);
      showToast('Login Successful', 'success');
      dispatch({ type: types.LOGIN.SUCCESS, payload: { ...responseData } });
      successCallback?.(responseData);
    } catch (err) {
      dispatch({ type: types.LOGIN.FAILURE, payload: err });
      errorCallback?.();
      showErrorMessage(err);
    }
  };
};
export const signUpAsync = (signUpData, successCallback, errorCallback) => {
  return async (dispatch) => {
    dispatch({ type: types.SIGNUP.REQUEST });
    try {
      const responseData = await identityService.signUp(signUpData);
      showToast('Signup Successful', 'success');
      dispatch({ type: types.SIGNUP.SUCCESS, payload: { ...responseData } });
      dispatch(setOTP(responseData.otp));
      successCallback?.();
    } catch (err) {
      dispatch({ type: types.SIGNUP.FAILURE, payload: err });
      errorCallback?.();
      showErrorMessage(err);
    }
  };
};

export const showErrorMessage = (err) => {
  const message = parseErrorMessage(err.response?.data);
  return showToast(message, 'error');
};

function parseErrorMessage(data) {
  if (typeof data?.Message === 'string' && data?.Message !== '') {
    return data.Message;
  } else if (data?.Message instanceof Array && data.Message.length > 0) {
    return data?.Message[0];
  } else if (typeof data?.error === 'string' && data?.error !== '') {
    return data.error;
  } else if (data?.error instanceof Array) {
    return data?.error[0] || 'An error occurred, contact the webmasters';
  } else {
    return 'An error occurred, contact the webmasters';
  }
}

export const setOTP = (otp) => {
  return {
    type: types.SET_OTP,
    payload: otp,
  };
};
