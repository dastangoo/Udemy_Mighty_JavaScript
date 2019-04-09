class One {
  constructor(a) {
    this.b = Two(a)
    console.log(One, a);
  }
}

class Two {
  constructor(a) {
    this.a = a;
    console.log(Two, a);
  }
}

let myClass = new One();