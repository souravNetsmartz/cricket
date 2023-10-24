import {combineReducers} from '@reduxjs/toolkit';
import counterSlice from './counter/counterSlice';
import {emptySplitApi} from './api/coreApi';

const ROOT = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
});

export default ROOT;
