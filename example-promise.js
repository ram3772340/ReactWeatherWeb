// function getTempCallBack(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('London', function(err, temp) {
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('London').then(function (temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('error', err);
// });

// Challenge Area

function addPromise(a, b) {
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    else {
      reject('Not a valid number(s).');
    }
  });
}

addPromise(5, 10).then(function(temp) {
  console.log('Added value:', temp);
}, function(err) {
  console.log('Error:', err);
});

addPromise(5, '10X').then(function(temp) {
  console.log('Added value:', temp);
}, function(err) {
  console.log('Error:', err);
});
