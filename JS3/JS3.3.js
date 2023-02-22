// Глава - Изменение контента и стилей элементов

//task 3.1
let div = document.getElementById('div_elem');
div.setAttribute('style', 'height:100px;width:100px')


//task 3.2
let par = document.querySelector('#rainbow');
par.setAttribute('style', 'color: #2980b9');

//task 3.3
let lab = document.querySelector('label');
lab.setAttribute('for', 'target')

//task 3.4
let par = document.querySelector('#rainbow');
if (1 <= par.innerText && par.innerText <= 9) {
  par.setAttribute('style', 'color:#c0392b')
} else if (10 <= par.innerText && par.innerText <= 20) {
  par.setAttribute('style', 'color:#e17055')
} else par.setAttribute('style', 'color:#fdcb6e')

//task 3.5
let div = document.querySelector('#photo');
let a = div.innerText
div.innerHTML = '<img>';
let img = document.querySelector('img')
img.setAttribute('src', a)
img.setAttribute('style', 'height:100px; width:100px')

//task 3.6
let sel = document.querySelector('#numbers')
for (let i = 10; i <= 550; i += 10) {
  let opt = document.createElement('option')
  opt.value = i
  opt.innerText = i;
  sel.append(opt)
}


//task 3.7
const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];
let sel = document.querySelector('select')

for (let i = 0; i < countries.length; i++) {
  let opt = document.createElement('option');
  let cou = countries[i];
  opt.value = cou.slice(0, 2).toLowerCase();
  opt.innerText = countries[i]
  sel.append(opt)
}