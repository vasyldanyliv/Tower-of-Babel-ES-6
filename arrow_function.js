let  inputs = process.argv.slice(2);
let result = inputs.map(strItem =>strItem).reduce((sum, current) => {
 return sum + current[0];
},'');
console.log(result);
