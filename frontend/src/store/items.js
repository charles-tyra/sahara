import { csrfFetch } from "./csrf";

const RECEIVE_ITEM = 'items/RECEIVE_ITEM';
const RECEIVE_ITEMS = 'items/RECEIVE_ITEMS';


const receiveItem = item => {
   return {
      type: RECEIVE_ITEM,
      item
   }
};

const receiveItems = items => {
   return {
      type: RECEIVE_ITEMS,
      items
   }
};


export const getItems = state => {
   if (state && state.item) return Object.values(state.items);
   return [];
};

export const getItem = itemId => state => {
   if (state && state.items) return state.items[itemId];
   return null;
};


export const fetchItems = () => async dispatch => {
   const response = await csrfFetch('/api/items');

   const data = await response.json();
   dispatch(receiveItems(data.items));
   return response;
}

export const fetchItem = itemId => async dispatch => {
   const response = await csrfFetch(`/api/items/${itemId}`);

   const data = await response.json();
   dispatch(receiveItem(data.item));
   return response;
}