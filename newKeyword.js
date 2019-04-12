class User {
  constructor(name, items) {
    this.name = name;
    this.items = items;    
  }
  increment() {
    return ++this.items;
  }

  decrement() {
    return --this.items;
  }
}

var user1 = new User("John Doe", 2);
console.log(user1);
console.log(user1.increment());
console.log(user1.decrement());