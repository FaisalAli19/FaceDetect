import databaseUrl from '../../api';
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  UPDATE_USER_STATE,
  LOGOUT_USER,
} from '../constant';

export const registerUser = payload => (dispatch) => {
  dispatch({ type: LOGIN_PENDING });
  fetch(`${databaseUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then((data) => {
      if (data === 'Registration failed') {
        dispatch({ type: LOGIN_FAILED, payload: { error: data } });
      } else {
        dispatch({ type: LOGIN_SUCCESS });
        dispatch({ type: UPDATE_USER_STATE, payload: data });
      }
    })
    .catch(console.log);
};

export const loginUser = payload => (dispatch) => {
  dispatch({ type: LOGIN_PENDING });
  fetch(`${databaseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: LOGIN_SUCCESS });
      dispatch({ type: UPDATE_USER_STATE, payload: data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, payload: err });
    });
};

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const updateEntries = payload => (dispatch) => {
  fetch(`${databaseUrl}/image`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: UPDATE_USER_STATE, payload: { entries: data } });
    })
    .catch((err) => {
      console.log(err);
    });
};
