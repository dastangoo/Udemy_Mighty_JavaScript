function outer() {
  var myStr = "JavaScript";
  
  function inner() {
    console.log(myStr);
  }
  return inner;
}

var result = outer();
result();