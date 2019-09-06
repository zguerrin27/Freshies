import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action){
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)   // action.payload is the id from the Action in itemActions
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]   // spread operator, ... , is used because we cant directly change state. Need to grab current state  open it up add to it
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default: 
      return state;
  }
}