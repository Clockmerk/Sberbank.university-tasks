// Глава - Массивы:основы

// task 9.1
list.unshift("Яблоко");
list.pop();
list.push("Клубника");
console.log(list)

// task 9.2
let maxString = ""
for (let i = 0; i < list.length; i++) {
  if (list[i].length > maxString.length) {
    maxString = list[i];
  }
}
console.log(maxString)

// task 9.3
let numb = 0
for (let i = 0; i < list.length; i++) {
  numb += list[i]
}
console.log(numb)

// task 9.4
function numb() {
  let list_3 = [];
  for (let element of list_1) {
    if (parseInt(element)) {
      list_3.push(element ** 2);
    }
  }
  for (let element of list_2) {
    if (parseInt(element)) {
      list_3.push(element ** 2);
    }
  }
  return console.log(list_3);
}
numb()

// task 9.5
let result = 0;
for (let i = 0; i < list.length; i++) {
  if (list[i] > 0) {
    result += list[i];
  }
}
console.log(result);

// task 9.6
res = 0;
for (let i = 0, len = list.length; i < len; i++) {
  if (list[i] === 1) {
    continue;
  } else if (typeof list[i] === "number") {
    for (let j = i; j < len; j++) {
      if (i === j) {
        res += list[i];
        continue;
      } else if (list[j] % list[i] === 0) {
        list[j] = false;
      }
    }
  }
}
console.log(res)

// task 9.7
list.sort((a, b) => a - b)
console.log(list[0] * list[list.length - 1])

// task 9.8
let newList = []
for (let i = list.length - 1; i >= 0; i--) {
  newList.push(list[i])
}
console.log(newList)

// task 9.9
let words = [];
let str = "";
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === " ") {
    words.push(str);
    str = "";
  } else {
    str += sentence[i];
  }
}
words.push(str);
console.log(words);

// task 9.10
function count(list) {
  let result = []

  for (let element of list) {
    if (element % 2 == 0) {
      result.push(element)
    }
  }

  return console.log(result.length);
}
count(list)

// task 9.11
function average(list) {
  num = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > 0) {
      num += list[i];
    }
  }
  return console.log(Math.round(num / list.length))
}
average(list)

// task 9.12
let num = 0;
for (let i = 0; i < list.length; i++) {
  if (typeof list[i] == "number") {
    num += list[i];
  }
  if (typeof list[i] == "boolean") {
    break;
  }
}
console.log(num);

// task 9.13
list = []
for (let i = 10; i <= 20; i++) {
  list.push(i)
}
console.log(list);

// task 9.14
function numb(list) {
  let numbers_list = [];
  for (let element of list) {
    if (parseInt(element)) {
      numbers_list.push(element);
    } else if (element == false) break;
  }
  return numbers_list
}
console.log(numb(list));

// task 9.15
let res = 0
for (let i = 0; i < list.length; i++) {
  if (list[i].toLowerCase() !== "default") {
    res += 1
  }
}
console.log(res);

// task 9.16
let resu = ''
for (let i = 0; i < list.length; i++) {
  resu += list[i][0]
}
console.log(resu);

// task 9.17
let hash = {};
for (let k in obj) {
  let val = obj[k];
  if (hash[val]) {
    hash[val]++;
  } else {
    hash[val] = 1;
  }
}
console.log(hash);

// task 9.18
let price = 0;
let product = "";
for (let i = 0; i < list.length; i++) {
  if (list[i].price > price) {
    price = list[i].price;
    product = list[i].product
  }
}
console.log(product);