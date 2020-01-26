import * as Api from '../utils/ApiRequest';
import { put } from 'redux-saga/effects';
import { takeEvery  } from 'redux-saga/effects';
import {GET_PRODUCTS,IS_SUCCESS,IS_LOADING,IS_FAILED} from './ApiAction';

function* getProducts (action) {
    yield put({ type: IS_LOADING, api_type : GET_PRODUCTS })

    try {
      const {data} = yield Api.getProducts(action.params[0],action.params[1],action.params[2]);
      if (typeof data !== 'undefined'){
          yield put({ type: IS_SUCCESS, data, api_type : GET_PRODUCTS })
      }
    }
    catch (error) {
      yield put({type: IS_FAILED, error:  error, api_type : GET_PRODUCTS  });
    }
}


export default function * apiSaga () {
    yield takeEvery(GET_PRODUCTS,getProducts);
}

