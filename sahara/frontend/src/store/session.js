import { csrfFetch } from "./csrf";

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = user => {
   return {
      type: SET_CURRENT_USER,
      payload: user
   }
};

const removeCurrentUser = () => {
   return {
      type: REMOVE_CURRENT_USER
   }
};

export const login = user => async dispatch => {
   const { email, password } = user;

   const response = await csrfFetch('api/session', {
      method: 'POST',
      body: JSON.stringify({
         email,                     // possible bug - see to catch
         password
      })
   });

   const data = await response.json();
   dispatch(setCurrentUser(data.user));
   return response;
};

const sessionReducer = (state = { user: null }, action) => {
   Object.freeze(state);
   const nextState = { ...state };

   switch (action.type) {
      case SET_CURRENT_USER:
         return { ...nextState, user: action.payload }
      case REMOVE_CURRENT_USER:
         return { ...state, user: null };
      default:
         return state;
   }
};

export default sessionReducer;