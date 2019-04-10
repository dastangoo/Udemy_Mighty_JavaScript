var from_decimal = (n, b) => {
  if (b < 2) {
    return "Base b must be greater than or equal to 2.";
  }
  if (n < 0) {
    return "Number n must be greater than or equal to 0";
  }
  if (n === 0) {
    return [0];
  }
  
  var digits = [];
  while (n > 0) {
    var m = n % b;
    var n = Math.floor(n / b);
    digits.unshift(m);
  }
  return digits;
};

// console.log(from_decimal(282, 5));

var encoding = (digits, charMap) => {
  var encoding = "";
  if (digits.length > charMap.length) {
    return "charMap is not long enough to encode the digits.";
  }
  
  for (var d of digits) {
    encoding += charMap[d];
  }
  return encoding;
};

// console.log(encoding(from_decimal(255, 16), charMap));

var combineBoth = (number, base) => {
  var charMap, sign, digits, encode;
  
  charMap = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  if (base < 2 || base > 36) {
    return "Invalid base";
  }
  
  sign = number < 0 ? -1 : 1;
  number *= sign;
  
  digits = from_decimal(number, base);
  encode = encoding(digits, charMap);
  
  if (sign === -1) {
    encode = "-" + encode;
  }
  return encode;
};

console.log(combineBoth(-282, 16));
