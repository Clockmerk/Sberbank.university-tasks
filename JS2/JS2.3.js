// Глава - Создание объектов

// task 3.1
car = {
  model: "Audi",
  color: "white",
  weight: 1850,
  engine: "170 hp"
}
delete car.engine
console.log(car)

// task 3.2
goods = {
  title: "Самокат",
  price: 6000,
  good_id: 1
}

newM = Object.keys(goods)
newM1 = Object.values(goods)
console.log(newM3 = newM.concat(newM1))

// task 3.3
article = {
  title: "Загадки дачного огурца",
  text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении"
}
author = {
  name: "Ричард М.В.",
  age: 43
}

console.log(aa = Object.assign(article, author))

// task 3.4
array = [true, 4, "word", "10n"];

count = () => console.log("Количество элементов в массиве: " + array.length);
count();

// task 3.5
employee = [
  ["firstName", "Ivan"],
  ["lastName", "Ivanov"],
  ["hireDate", "21.10.2015"]
]
new_1 = new Map(employee);
new_1.delete('hireDate')
new_1.set("jobName", "IT PROG")
console.log(Array.from(new_1))

// task 3.6
array = [
  ["string", "word"],
  ["string", "word"],
  ["string", "word"]
];
n = 0
for (let i = 0; i < array.length; i++) {
  if (typeof array[i][1] == 'string') {
    n += 1
  }
}
console.log("Количество строковых элементов в именованном массиве: " + n)