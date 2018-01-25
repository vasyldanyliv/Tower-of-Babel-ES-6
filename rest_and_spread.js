let rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => {
 let commaSep = val.split(',');
 commaSep.forEach(val => {
  if(val !== '') args.push(+val);
 });
});

let avg = function(...args){
 return args.reduce( (sum, n) => sum + n) / args.length ;
};

console.log(avg(...args));
