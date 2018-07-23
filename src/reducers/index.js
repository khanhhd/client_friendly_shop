import { combineReducers } from 'redux';
import ProductReducer from './reducer_products';
import ActiveProduct from './reducer_active_product';

const rootReducer = combineReducers({
  products: ProductReducer,
  activeProduct: ActiveProduct
});

export default rootReducer;
