import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    {id: uuid(), name: "Milk"},
    {id: uuid(), name: "Water"},
    {id: uuid(), name: "Bread"},
    {id: uuid(), name: "Vodka"}
  ]
};

export default function(state = initialState, action){
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)   // action.payload is the id from the Action in itemActions
        }
    case ADD_ITEM:
        return {
          ...state,
          items: [action.payload, ...state.items]   // spread operator, ... , is used because we cant directly change state
        }
    default: 
      return state;
  }
}