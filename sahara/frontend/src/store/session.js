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


const storeCurrentUser = user => {
   if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
   else sessionStorage.removeItem("currentUser")
}

const storeCSRFToken = response => {
   const csrfToken = response.headers.get('X-CSRF-Token');
   if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
}


export const restoreSession = () => async dispatch => {
   let response = await fetch('/api/session');

   storeCSRFToken(response);
   const data = await response.json();
   storeCurrentUser(data.user);

   dispatch(setCurrentUser(data.user));

   return response;
}

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
   storeCurrentUser(data.user);
   dispatch(setCurrentUser(data.user));
   return response;
};


const initialState = { user: JSON.parse(sessionStorage.getItem('currentUser')) };

const sessionReducer = (state = initialState, action) => {
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