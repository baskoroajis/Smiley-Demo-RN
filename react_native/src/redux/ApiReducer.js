import {IS_LOADING,IS_FAILED,IS_SUCCESS,GET_PRODUCTS} from './ApiAction';
import { combineReducers } from 'redux'

const AppsReducers = combineReducers({
    api: requestData,
})
  
export default AppsReducers
const initialState = {
    products : {}
};

function requestData(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING: {
             switch (action.api_type){
                 case (GET_PRODUCTS):{
                     return {...state,products: {loading: true}}
                 }
               
                 default:{
                     return {...state};
                 }
             }
        }
        case IS_SUCCESS: {
             switch (action.api_type){
                 case (GET_PRODUCTS):{
                     return {...state,products: {data : action.data,loading: false}}
                 }
              
                 default : {
                     return {...state};
                 }
             }
        }
        case IS_FAILED: {
            switch(action.api_type){
                 case (GET_PRODUCTS):{
                     return {...state,products: {http_error : 401, loading: false}}
                 }
                 
                 default : {
                     return {...state};
                 }
             }
        }
        default: {
            return {...state};
        }
    }
}