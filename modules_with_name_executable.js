let arg1 = process.argv[2];
let arg2 = process.argv[3];
import {PI} from './modules_with_name.js';
import {sqrt} from './modules_with_name.js';
import {square} from './modules_with_name.js';
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
