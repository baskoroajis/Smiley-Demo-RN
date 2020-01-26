/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import apiReducer from './src/redux/ApiReducer';
import createSagaMiddleware from 'redux-saga';
import apiSaga from './src/redux/ApiSaga';
import { createStore, applyMiddleware } from 'redux';


const AppRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )  
const sagaMiddleware = createSagaMiddleware()
const store =  createStore(apiReducer,applyMiddleware(sagaMiddleware))
AppRegistry.registerComponent(appName, () => AppRedux);
sagaMiddleware.run(apiSaga)
