function users(name, items) {
  var newUser = {};
  newUser.name = name;
  newUser.items = items;
  newUser.increment = function increment() {
    return ++this.items;
  }
  return newUser;
}

var user1 = users("John Doe", 2);
console.log(user1);
console.log(user1.increment());

var user2 = users("Jane Doe", 3);
console.log(user2);
console.log(user2.increment());