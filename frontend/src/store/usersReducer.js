const RECEIVE_USER = 'users/RECEIVE_USER';
const REMOVE_USER = 'users/REMOVE_USER';

export const receiveUser = user => {
   return {
      type: RECEIVE_USER,
      payload: user
   }
};

export const removeUser = userId => {
   return {
      type: REMOVE_USER,
      userId
   }
};

const userReducer = ( state = {}, action ) => {
   const nextState = {...state};

   switch(action.type) {
      case RECEIVE_USER:
         nextState[action.payload.id] = action.payload;
         return nextState;
      case REMOVE_USER:
         delete nextState[action.userId];
         return nextState;
      default:
         return state;
   }
};

export default userReducer;