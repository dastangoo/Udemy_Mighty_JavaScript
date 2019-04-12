function User(name, items) {
  this.name = name;
  this.items = items;
}
// users.prototype.increment = function increment() {
// User.prototype.increment = function () {
//   return ++this.items;
// }
// 
// User.prototype.decrement = function () {
//   return --this.items;
// }

// var user1 = new User("John Doe", 2);
var user1 = User("John Doe", 2);
console.log(user1);
console.log(name);
console.log(window);
// console.log(user1.increment());
// console.log(user1.decrement());