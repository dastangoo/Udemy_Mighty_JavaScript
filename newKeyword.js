function users(name, items) {
  this.name = name;
  this.items = items;
}
// users.prototype.increment = function increment() {
users.prototype.increment = function () {
  return ++this.items;
}

users.prototype.decrement = function () {
  return --this.items;
}

var user1 = new users("John Doe", 2);
console.log(user1);
console.log(user1.increment());
console.log(user1.decrement());