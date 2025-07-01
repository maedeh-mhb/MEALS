import map from './node_modules/lodash-es/map.js';
import {addTocart} from './shoppingCart.js';

function square(n) {
  return n * n;
}
 
const newArray = map([4, 8], square);
// => [16, 64]

 console.log(newArray);
addTocart('pizza',2)