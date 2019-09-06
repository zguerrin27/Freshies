import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import { set } from 'mongoose';


// these actions to go the itemReducer..payload carries something to reducer...type is the name of the action

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/items")
    .then(res => dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  )

};

export const addItem = (item) => dispatch => {     
 axios.post("/items", item).then(res => dispatch({
   type: ADD_ITEM,
   payload: res.data
 }))
}

export const deleteItem = (id) => dispatch => {     
 axios.delete(`/items/${id}`).then(res => {
   dispatch({
     type: DELETE_ITEM,
     payload: id
   })
 })
}

export const setItemsLoading = () => {     
  return {
    type: ITEMS_LOADING
  }
}