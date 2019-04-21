import { combineReducers } from 'redux';

import authReducers from './authReducers';
import userReducers from './userReducers';

export default combineReducers({
  auth: authReducers,
  user: userReducers,
});
