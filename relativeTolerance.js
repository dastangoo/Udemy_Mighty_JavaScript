var isEqual = (a, b, relTol) => {
  var tol = relTol * Math.max(Math.abs(a), Math.abs(b));
  return Math.abs(a - b) < tol
};

var a = 0.1 * 3;
var b = 0.3;
console.log(a);
console.log(b);

var x = 100000.1 * 3;
var y = 300000.3;
console.log(x);
console.log(y);

var relTol = 0.001 * 100;

console.log(isEqual(a, b, relTol));
console.log(isEqual(x, y, relTol));



