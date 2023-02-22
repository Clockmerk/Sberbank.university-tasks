// Глава - OOП

// task 5.1
order = {
  productName: "Велосипед",
  costomerName: "Саша",
  salesName: "Петя",
  totalPrice: 15000
}

console.log(Object.getOwnPropertyDescriptor(order, 'totalPrice'));

// task 5.2
let employees = {
  firstName: "Петя",
  lastName: "Иванов",
  ratePerDay: 2500,
  workingDays: 5,
  getSalary() { console.log(employees.ratePerDay * employees.workingDays) }
}

let str = "";
for (let k in employees) {
  if (typeof employees[k] !== "function") {
    str += `${k}, `;
  }
}
str = str.slice(0, str.length - 2);
console.log(str);

// task 5.3
user = {
  firstName: firstName,
  lastName: lastName,
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};
console.log(user.fullName)

// task 5.4
class Delivery {
  constructor(name, phone, validPhone) {
    this.name = name;
    this.phone = phone;
    this.validPhone
    if (phone.match(/\B[+]/gi)) {
      console.log('yes')
      this.validPhone = true
    } else this.validPhone = false
  }
}
let deliveryName = new Delivery(name, phone)
console.log(deliveryName.validPhone)

// task 5.5
class Permissions {
  constructor() {
    this.create = false;
    this.read = true;
    this.update = false;
    this.remove = false;
  }
}
class User extends Permissions {
  constructor(name) {
    super(name);
    this.name = name
  }
}

// task 5.6
let array = [-12, -32, -43, -3, -1],
  num = 3;

const queue = (n, arr) => {
  arr.sort((a, b) => a - b)
  console.log(arr)
  let s = 0;
  for (let i = 0; i < n; i++) {
    s += arr[i];
  }
  return s;
}

console.log(queue(num, array));