// Глава - Элементы веб-страницы и методы обращения к ним

//task 1.1
let res = document.querySelector(".secret");
console.log(res.tagName.toLowerCase());
//или
let res = document.getElementsByClassName('secret')[0].parentElement
let name_t = res.nodeName;
console.log(name_t.toLowerCase())
//или
let res = document.getElementsByClassName('secret')[0].parentElement;
let res_1 = res.toString()
if (res_1.match(/parag/gi)) {
    console.log('p')
} else if (res_1.match(/span/gi)) {
    console.log('span')
} else console.log('div')

//task 1.2
let res = document.querySelector('#elem')
console.log(res.localName)
//или
let res = document.getElementById('elem').parentElement;
let res_1 = res.toString()
if (res_1.match(/parag/gi)) {
    console.log('p')
} else if (res_1.match(/span/gi)) {
    console.log('span')
} else console.log('div')

//task 1.3
console.log(document.querySelectorAll('.promo').length)

//task 1.4
let res = document.getElementsByClassName('target')
let res_1 = res[res.length - 1]
let name_t = res_1.nodeName;
console.log(name_t.toLowerCase())

//task 1.5
let res = document.getElementsByClassName('price')[0]
res.innerHTML *= 2
console.log(res.innerHTML)

//task 1.6
let res = document.getElementsByClassName('links')[0]
let link = res.innerHTML;
res.innerHTML = '<a>' + link
console.log(res.innerHTML)

//task 1.7
let res = document.getElementsByClassName('content')[0]
let text = res.innerText;
res.innerHTML = "<b>" + text
console.log(res.innerHTML)


//task 1.8
let res = document.getElementsByClassName('price')
let sum = 0;
for (let i = 0; i < res.length; i++) {
    sum += +res[i].innerText;
}
console.log(sum)

//task 1.9
let res = document.getElementsByClassName('numeric')[0]
let res_1 = document.getElementsByClassName('numeric')[1]
let res_2 = document.getElementsByClassName('numeric')[2]
let num = res.innerText
let num_1 = res_1.innerText
let num_2 = res_2.innerText

if (Number(num) < 0) {
    res.innerHTML = '<b>' + num
} else if (Number(num_1) < 0) {
    res_1.innerHTML = '<b>' + num_1
} else { res_2.innerHTML = '<b>' + num_2 }

//task 1.10
let res = document.getElementsByClassName('numeric')[0].innerText
let res_1 = document.getElementsByClassName('numeric')[1].innerText
let res_2 = document.getElementsByClassName('numeric')[2].innerText

let result = Number(res) + Number(res_1) + Number(res_2)
console.log(result)

//task 1.11
let res = document.querySelector('.cars')
cars = []
for (let i = 0; i < res.children.length; i++) {
    cars.push(res.children[i].innerText)
}
console.log(cars)
//или
let res = document.getElementsByClassName('cars')[0].innerText
str = res.replace(/[\n]/g, " ")
cars = str.split(' ')
console.log(cars)