import { combineReducers } from 'redux';
import {giphysReducer} from './giphys_reducer';
import React from 'react';

export default combineReducers({
  giphys: giphysReducer
});
