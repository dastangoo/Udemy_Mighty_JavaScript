var user1 = {
  name: "John Doe",
  items: 0,
  // increment: function increment() {
  // increment: function() {
  increment() { // ES6 (ES2015)
    // return ++user1.items;
    return ++this.items;
  }
};

console.log(user1);
console.log(user1.increment());

// Dot notation syntax
var user2 = {};
user2.name = "Jane Doe";
user2.items = 2;
user2.increment = function increment() {
  return ++this.items;
}
console.log(user2);
console.log(user2.increment());

// Object.create syntax
// var user3 = Object.create({});
// var user3 = Object.create(null);
var user3 = Object.create(user1);
console.log(user3.name);
console.log(user3);
user3.name = "Jack Doe";
user3.items = 3;
user3.increment = function increment() {
  return ++this.items;
}
console.log(user3);
console.log(user3.increment());
console.log(user3.__proto__.increment());