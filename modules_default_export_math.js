let  _sqrt =(s, x, last) =>{
 return x !== last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
let sqrt = (s) => {
 return _sqrt(s, s/2.0, 0.0);
};
let square = (x) => {
 return x * x;
};
const PI = 3.141592;

export default {
 PI: PI,
 sqrt: sqrt,
 square: square
}

