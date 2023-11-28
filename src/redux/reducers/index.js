import { combineReducers } from 'redux';
import modal from './modal.reducer';
import auth from './auth.reducers';
import dashboard from './dashboard.reducer';
import user from './user.reducer';
import email from './email.reducer';

const rootReducer = combineReducers({
  auth,
  modal,
  dashboard,
  user,
  email,
});

export default rootReducer;
