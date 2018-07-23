import axios from 'axios';

// export const PRODUCT_SELECTED = 'PRODUCT_SELECTED';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

// export function selectProduct(product) {
//   return {
//       type: PRODUCT_SELECTED,
//       payload: product
//   }
// }
//

export function fetchProduct(name) {
  const url = `http://localhost:3001/products?name={name}`;
  const request = axios.get(url);
  return {
    type: FETCH_PRODUCT,
    payload: request
  }
}
