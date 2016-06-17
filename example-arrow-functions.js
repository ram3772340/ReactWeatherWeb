// var names = ['Ram', 'Bart', 'Amar'];
//
// names.forEach(function(name){
//   console.log('foreach', name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc', name);
// });
//
// names.forEach((name) => console.log('Simple', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Ram'));

// var person = {
//   name: 'Liz',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge Area

// function add(a, b){
//   return a+b;
// }
//
// console.log(add(10, 12));
// console.log(add(10, 0));

var addStatement = (a, b) => {
  return a+b;
};
console.log(addStatement(10, 2));

var addExpression = (a, b) => a+b;
console.log(addExpression(10, 21));
