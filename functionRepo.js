function users(name, items) {
  // var newUser = Object.create(null);
  // var newUser = Object.create(functionRepo);
  // newUser.name = name;
  this.name = name;
  // newUser.items = items;
  this.items = items;
  // return newUser;
}

var functionRepo = {
  increment: function increment() {
    return ++this.items;
  }
};

var user1 = new users("John Doe", 2);
console.log(user1);
// console.log(user1.increment());