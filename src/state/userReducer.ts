import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  isLoggedIn: true,
  isMember: false,
  isAdmin: false,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default userReducer;
