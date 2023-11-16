import * as types from '../types';

export const userActions = {
  chooseFirstName: (payload) => ({
    type: types.CHOOSE_FIRST_NAME,
    payload,
  }),
  chooseLastName: (payload) => ({
    type: types.CHOOSE_LAST_NAME,
    payload,
  }),
  chooseEmail: (payload) => ({
    type: types.CHOOSE_EMAIL,
    payload,
  }),
  choosePassword: (payload) => ({
    type: types.CHOOSE_PASSWORD,
    payload,
  }),
  chooseAge: (payload) => ({
    type: types.CHOOSE_AGE,
    payload,
  }),
  chooseGender: (payload) => ({
    type: types.CHOOSE_GENDER,
    payload,
  }),
  choosePhoneNumber: (payload) => ({
    type: types.CHOOSE_PHONE_NUMBER,
    payload,
  }),
  chooseAddress: (payload) => ({
    type: types.CHOOSE_ADDRESS,
    payload,
  }),
  completedStep: (payload) => ({
    type: types.COMPLETE_STEP,
    payload,
  }),
  resetSteps: () => ({
    type: types.RESET_STEPS
  }),
};
