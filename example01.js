var n = 280;
var b = 5;
var myArr = [];
var m;
var characterMap = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var encoding = "";

while (n > 0) {
  m = n % b;
  n = Math.floor(n / b);
  myArr.push(m);
}

for (var num in myArr) {
  // console.log(num);
  encoding += characterMap[myArr[num]];
  // console.log(encoding);
}
// console.log(myArr);
// console.log(encoding);
// console.log(myArr.reverse().join(''));
