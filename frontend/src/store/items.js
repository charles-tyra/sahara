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
   if (state && state.items) return Object.values(state.items);
   return [];
};

export const getItem = itemId => state => {
   if (state && state.items) return state.items[itemId];
   return null;
};


export const fetchItems = (search = '') => async dispatch => {
   const searchParams = new URLSearchParams(search);
   console.log(searchParams)
   const response = await csrfFetch(`/api/items?${searchParams}`);

   const data = await response.json();
   dispatch(receiveItems(data.items));
}

export const fetchItem = itemId => async dispatch => {
   const response = await csrfFetch(`/api/items/${itemId}`);

   const data = await response.json();
   dispatch(receiveItem(data.item));
}

const itemReducer = ( state = {}, action ) => {
   const nextState = {...state};

   switch(action.type) {
      case RECEIVE_ITEM:
         nextState[action.item.id] = action.item;
         return nextState;
      case RECEIVE_ITEMS:
         return {...nextState, ...action.items}
      default:
         return state;
   }
};

export default itemReducer;