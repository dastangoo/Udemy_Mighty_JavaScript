var isEqual = (a, b, eps) => {
  var res = Math.abs(a - b);
  return Math.abs(a - b) < eps;
};


var x = 0.00000001;
var y = 0.0000001;

var absTol = 10e-15;

var relTol = 0.001 * 100;
var tol = Math.max(relTol * Math.max(Math.abs(x), Math.abs(y)), absTol);
console.log(isEqual(x, y, tol));