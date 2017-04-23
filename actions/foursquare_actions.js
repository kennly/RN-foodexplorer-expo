import axios from 'axios';
import qs from 'qs';

import {
  FETCH_RESTAURANT
} from './types';

//client id BERZG4GIUCLIPJT4OQQMVWFNWWK0LTL20RVXCKWVABALUDUZ
//client secret CNBVJZ4JHNE1MFL2TSEGK3ZATWQRKFAFIIZJZTCY3WMA0LHX

//userless connection
//https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=YYYYMMDD

//user connection
//https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=YYYYMMDD

//key
//e3b40f70cf2fa3c584f1b4923314c185

const RESTAURANT_ROOT_URL = 'https://api.foursquare.com/v2/venues/search?';

const RESTAURANT_QUERY_PARAMS = {
  client_id: 'BERZG4GIUCLIPJT4OQQMVWFNWWK0LTL20RVXCKWVABALUDUZ',
  client_secret: 'CNBVJZ4JHNE1MFL2TSEGK3ZATWQRKFAFIIZJZTCY3WMA0LHX',
  ll: '40.7,-74',
  v: '20170303',
  m:'foursquare',
  query: 'sushi'
};

const buildRestaurantUrl = (region) => {
  const query = qs.stringify({ ...RESTAURANT_QUERY_PARAMS, ll: region })
  return `${RESTAURANT_ROOT_URL}${query}`;

}

export const fetchRestaurant = (region) => async (dispatch) => {
  //use redux thunk for network request.
  try{
    console.log('region in action',region)
    let region = await region
    console.log('region here', region)
    const url = buildRestaurantUrl(region);
    console.log(url);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_RESTAURANT, payload: data });
    console.log('data from dispatch', data);
  } catch(e) {
    console.error(e);
  }

};
