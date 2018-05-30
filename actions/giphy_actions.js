import * as APIUtil from '../util/api_util';
import React from 'react';

export const RECEIVE_SEARCH_GIPHYS = 'REACEIVE_SEARCH GIPHYS';
// action creator. creates an object to give to the dispatcher.

export const receiveSearchGiphys = giphys => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  }
};
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';
// thunk action creator
export const fetchSearchGiphys = (searchTerm) => {
  return (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm)
    .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
  }
}
