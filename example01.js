var sizeof = require('sizeof'); 


// a = [10, 9, 15, 25];
a = {
  a: 10,
  b: "hey there"
}

// console.log(sizeof.sizeof(anyObject));	// 50
console.log(sizeof.sizeof(a, true));	// 50B
