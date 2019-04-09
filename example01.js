var a = new Number('123')
console.log(`a=${a}`);
console.log(typeof(a));
console.log(a instanceof Number);
a = Number('123')
console.log(`a=${a}`);
console.log(typeof(a));
console.log(a instanceof Number);
a = 123;
console.log(`a=${a}`);
console.log(typeof(a));
console.log(a instanceof Number);

myArr = ["0"]
console.log(myArr);
console.log(myArr.valueOf());
console.log(myArr.toString());
console.log(Number(myArr));

myArr = ["0", "1", "2"]
console.log(myArr);
console.log(myArr.valueOf());
console.log(myArr.toString());
console.log(Number(myArr));