// console.log(0.1.toFixed(25) * 3);
// 
// console.log(0.3.toFixed(25));

// console.log((0.1 + 0.1 + 0.1).toFixed(5) === (0.3).toFixed(5));
// 
// console.log((0.1 + 0.1 + 0.1).toFixed(25) === (0.3).toFixed(25));


var isEqual  = (a, b, eps) => {
  return Math.abs(a - b) < eps;
};

// var a = 0.1 + 0.1 + 0.1;
// var b = 0.3;
// var tol = 10e-15;

// var a = 100000.1 + 100000.1 + 100000.1;
// var b = 300000.3;
// var tol = 10e-15;
// 
// console.log(isEqual(a, b, tol));

console.log(((0.1 + 0.1 + 0.1).toFixed(25) - (0.3).toFixed(25)).toFixed(25));
console.log(10e-15.toFixed(15));

console.log(((100000.1 + 100000.1 + 100000.1).toFixed(25) - (300000.3).toFixed(25)).toFixed(25));
