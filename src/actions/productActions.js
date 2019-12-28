import {FETCH_PRODUCTS} from '../actions/types';
import {products} from '../data/products';

export const fetchProducts = () => dispatch => {
  const products = ['productList'];

  return dispatch ({type: FETCH_PRODUCTS, payload: products});
};
