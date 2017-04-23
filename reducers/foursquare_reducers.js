import {
  FETCH_RESTAURANT
} from '../actions/types';

const INITIAL_STATE = {
  results: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
    console.log('in restaurant reducer')
    console.log(state)
      return action.payload;
    default:
      return state;
  }
}
