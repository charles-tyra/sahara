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
   const response = await csrfFetch(`api/carts/${cartId}`);

   const data = await response.json();
   dispatch(receiveCart(data.cart));
}

export const fetchCarts = () => async dispatch => {
   const response = await csrfFetch('api/carts');

   const data = await response.json();
   dispatch(receiveCarts(data.carts));
}

