// Глава - Методы массивов

// task 2.1
values = ["Строка", true, "Число", "Объект", "Не число", false];

for (let e = 0; e < values.length; e++) {
  if (typeof values[e] == "boolean") {
    values[e] = "Булевый тип";
    break;
  }
}
console.log(values);

// task 2.2
partNumbers = ["ER1234COM", "FIV987451RU", "GE123JO", "P4321NO"]

console.log(partNumbers.filter(art => art.match(/\d{2}[A-Z]{2}\b/gi)))

// task 2.3
layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"

if (layout == "") {
  console.log([]);
}
arr = layout.match(/\b\d{1,3}\b/g);
arr1 = arr.map(function (e) {
  if (e % 2 == 0) {
    return e ** 2;
  } else return e * 1;
});
console.log(arr1);
//или
if (layout == "") {
  console.log([]);
} else arr = layout.match(/\b\d{1,3}\b/g);
arr1 = [];
for (let e = 0; e < arr.length; e++) {
  if (arr[e] % 2 == 0) {
    arr1.push(arr[e] ** 2);
  } else arr1.push(arr[e] * 1)
}
console.log(arr1);

// task 2.4
tasks = [
  { title: "Умыться", completed: true },
  { title: "Сделать зарядку", completed: true },
  { title: "Приготовить завтрак", completed: false }
];

arr = tasks.map(e => e.title)
console.log(arr)

// task 2.5
values = ["Строка", true, "Число", "Объект", "Не число", false, "Не объект"]
for (let e = 0; e < values.length; e++) {
  if (typeof values[0] !== "boolean") {
    values.shift(values[e])
    break
  }
}
for (let e = values.length; e > 0; e--) {
  if (typeof values[values.length - 1] !== "boolean") {
    values.pop(values[e])
    break
  }
}
console.log(values)

// task 2.6
values = [10, 185, 11200, 980]

let regi = /\b\d{4}\b/g;
console.log(regi.test(values))

// task 2.7
let reg = /\b\d{4}\b/g;
reg.test(values) ? console.log(values.find(/\b\d{4}\b/g)) : console.log("Искомый элемент не был найден")

// task 2.8
users = [
  { login: "manager", role: "user name" },
  { login: "user", role: "guest" },
  { login: "admin", role: "superuser" }
];
let ini = users.find(e => e.role.indexOf(" ") != -1)
console.log(users.indexOf(ini));
//или
arr = users.map((e) => e.role);
if (arr[0].length > arr[1].length && arr[0].length >= arr[2].length) {
  console.log(0);
} else if (arr[1].length > arr[0].length && arr[1].length > arr[2].length) {
  console.log(1);
} else console.log(2);


// task 2.9
array = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3, 4]
];

sortNum = (a, b) => {
  aL = a.length;
  bL = b.length;
  if (aL == bL) return 0;
  if (aL < bL) return -1;
  if (aL > bL) return 1;
};

array.sort(sortNum);
console.log(array);

// task 2.10
randValues = ["Банан", 3, "Апельсин", 2, "Вишня"]

randValues.sort(function (a, b) {
  return a - b;
})
if (typeof randValues[0] == "string") {
  console.log(randValues.sort())
} else console.log(randValues)

// task 2.11
words = ["Заказ", "Такси", "Доход"]
words1 = []
pal = 0
npal = 0
for (let i = 0; i < words.length; i++) {
  if (words[i].split('').reverse().join('').toLowerCase() == words[i].toLowerCase()) {
    pal += 1;
  } else npal += 1;
}
words1.push(pal)
words1.push(npal)
console.log(words1)

// task 2.12
dates = "23.04.1996 07.10.2002 15.08.1945"
console.log(dates.replace(/\./g, '/').split(' '))

// task 2.16
array_1 = [1, 2, 3, 4]
array_2 = [7, 8, 9, 1, 2, 4]

let intersection = function (a, b) {
  arr = a.filter(i => b.includes(i))
  return arr.sort((a, b) => b - a);
}
console.log(intersection(array_1, array_2))