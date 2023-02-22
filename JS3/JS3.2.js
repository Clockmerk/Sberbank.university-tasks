// Глава - Создание и удаление элементов веб-страницы и перемещение по DOM-дереву

//task 2.1
let new_element = document.createElement('p')
new_element.innerText = "Ура! Мой скрипт отработал верно!"
let root_div = document.getElementById('root');
root_div.append(new_element)

//task 2.2
let new_element = document.createElement('h2')
new_element.innerText = "Сегодня солнечно, минус 15"
let title_p = document.getElementById('title');
title_p.after(new_element)

//task 2.3
let new_element = document.createElement('li')
new_element.innerText = 'Велосипед'
let ul = document.querySelector('ul')
ul.prepend(new_element)

//task 2.4
let div = document.querySelectorAll('div');
div.forEach(c => {
  c.className = "adds";
});

//task 2.5
let p = document.querySelectorAll('p');
n = 1
p.forEach(c => {
  c.id = "p_" + n;
  n = n + 1
});
или
let p = document.querySelectorAll('p');
n = 1
for (let i = 0; i < p.length; i++) {
  p[i].id = 'p_' + n;
  n = n + 1
}

//task 2.6
let del = document.querySelectorAll('p');
del.forEach(el => {
  if (el.innerText == 'Delete') {
    el.remove()
  }
})


//task 2.7
let p = document.querySelectorAll('.elems')
p.forEach(el => {
  let inn = el.innerText;
  if (values.find(num => num == parseInt(inn))) {
    el.remove()
  }
})

//task 2.8
let div1 = document.getElementById('div1')
let cont = div1.innerHTML
let div2 = div1.nextElementSibling
div2.innerHTML += cont
div1.innerHTML = ''

//task 2.9
let ul = document.getElementById('first')
let new_element = document.createElement('li');
ul.appendChild(new_element)
let li_list = ul.getElementsByTagName('li')
console.log(li_list.length)


//task 2.10
let values = ["велосипед", "ролики", "лыжи"];
let div_1 = document.querySelector("#div1"), div_2 = document.querySelector("#div2");
for (let ch = 0; ch < div_1.children.length;) {
  let el = div_1.children[ch];
  if (values.includes(el.innerText)) {
    div_2.append(el)
  } else ch++
}

//task 2.11
let tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
let div_1 = document.getElementById("root")
for (let i = 0; i < tasks.length; i++) {
  div_1.innerHTML += '<p>' + tasks[i];
}
console.log(div_1)



//task 2.12
let d = 0, p = 0, h = 0;
let n_tags = document.querySelectorAll("div, p, h2");
n_tags.forEach(el => {
  if (el.localName == 'div') {
    d += 1
  } else if (el.localName == 'p') {
    p += 1
  } else h += 1
})
let tags = new Object();
tags.div = d, tags.p = p, tags.h2 = h
console.log(tags)

//task 2.13
let ul = document.getElementById("tasks");
function sort(list) {
  let listElements = [...list.children];
  let sortedListElements = listElements.sort((a, b) => a.innerText.length - b.innerText.length);
  list.innerHTML = "";
  sortedListElements.forEach((el) => list.appendChild(el));
}
sort(ul)
