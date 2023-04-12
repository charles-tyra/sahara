import { csrfFetch } from "./csrf";

const RECEIVE_CART = 'carts/RECEIVE_CART';
const RECEIVE_CARTS = 'carts/RECEIVE_CARTS';
const REMOVE_CART = 'carts/REMOVE_CART';

const receiveCart = cart => {
   return {
      type: RECEIVE_CART,
      cart
   }
};

const receiveCarts = carts => {
   return {
      type: RECEIVE_CARTS,
      carts
   }
};

const removeCart = cartId => {
   return {
      type: REMOVE_CART,
      cartId
   }
};


export const getCart = cartId => state => {
   if (state && state.carts) return state.carts[cartId];
   return null;
}

export const getCarts = state => {
   if (state && state.carts) return Object.values(state.carts);
   return [];
}


export const fetchCart = cartId => async dispatch => {
   const response = await csrfFetch(`/api/carts/${cartId}`);

   const data = await response.json();
   dispatch(receiveCart(data.cart));
}

export const fetchCarts = () => async dispatch => {
   const response = await csrfFetch('/api/carts');

   const data = await response.json();
   dispatch(receiveCarts(data.carts));
}

export const createCart = cart => async dispatch => {
   console.log(cart);
   const response = await csrfFetch('/api/carts', {
      method: 'POST',
      body: JSON.stringify(cart)
   });

   const data = await response.json();
   dispatch(receiveCart(data.cart));
}

export const updateCart = cart => async dispatch => {
   const response = await csrfFetch(`/api/carts/${cart.id}`, {
      method: 'PATCH',
      body: cart
   });

   const data = await response.json();
   dispatch(receiveCart(data.cart));
}

export const deleteCart = cartId => async dispatch => {
   await csrfFetch(`/api/carts/${cartId}`, {
      method: "DELETE"
   });

   dispatch(removeCart(cartId));
}


const cartReducer = ( state = {}, action ) => {
   const nextState = {...state};

   switch(action.type) {
      case RECEIVE_CART:
         nextState[action.cart.id] = action.cart;
         return nextState;
      case RECEIVE_CARTS:
         return {...nextState, ...action.carts};
      case REMOVE_CART:
         delete nextState[action.cartId];
         return nextState;
      default:
         return state;
   }
}

export default cartReducer;